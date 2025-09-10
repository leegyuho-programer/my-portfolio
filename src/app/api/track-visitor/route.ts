import { getSupabaseClient } from '@/lib/supabase/supabase';
import { getTodayKSTDate } from '@/utils/date';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SupabaseClient } from '@supabase/supabase-js';

const COOKIE_NAME = 'lastVisit';
const TOTAL_VISITORS_ID = 1;

export async function POST() {
  try {
    const supabase = getSupabaseClient();
    const today = getTodayKSTDate();

    // 중복 방문 체크
    if (await isDuplicateVisit(today)) {
      return NextResponse.json({
        success: true,
        message: '이미 오늘 방문 처리됨',
      });
    }

    // 방문자 수 업데이트
    await updateVisitorCount(supabase, today);
    await updateTotalVisitorCount(supabase);

    // 응답 생성 및 쿠키 설정
    return createResponseWithCookie(today);
  } catch (error) {
    console.error('방문 기록 오류:', error);
    return NextResponse.json({ error: '방문 기록 실패' }, { status: 500 });
  }
}

// 중복 방문 체크
async function isDuplicateVisit(today: string): Promise<boolean> {
  const cookieStore = await cookies();
  const lastVisit = cookieStore.get(COOKIE_NAME)?.value;
  return lastVisit === today;
}

// 일일 방문자 수 업데이트
async function updateVisitorCount(supabase: SupabaseClient, today: string) {
  const { data: existingRecord } = await supabase
    .from('visitors')
    .select('visitor_count')
    .eq('visit_date', today)
    .single();

  if (existingRecord) {
    await supabase
      .from('visitors')
      .update({ visitor_count: existingRecord.visitor_count + 1 })
      .eq('visit_date', today);
  } else {
    await supabase
      .from('visitors')
      .insert({ visit_date: today, visitor_count: 1 });
  }
}

// 총 방문자 수 업데이트
async function updateTotalVisitorCount(supabase: SupabaseClient) {
  const { data: totalData } = await supabase
    .from('total_visitors')
    .select('total_count')
    .eq('id', TOTAL_VISITORS_ID)
    .single();

  if (totalData) {
    await supabase
      .from('total_visitors')
      .update({ total_count: totalData.total_count + 1 })
      .eq('id', TOTAL_VISITORS_ID);
  }
}

// 쿠키가 설정된 응답 생성
function createResponseWithCookie(today: string) {
  const response = NextResponse.json({ success: true });

  response.cookies.set(COOKIE_NAME, today, {
    path: '/',
    expires: getTomorrowMidnight(),
    httpOnly: true,
  });

  return response;
}

// 다음날 자정 시간 계산
function getTomorrowMidnight(): Date {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow;
}

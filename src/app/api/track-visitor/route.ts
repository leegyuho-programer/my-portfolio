import { getSupabaseClient } from '@/lib/supabase/supabase';
import { NextResponse } from 'next/server';

// 한국 시간(KST, UTC+9) 기준 오늘 날짜 반환 (YYYY-MM-DD)
export default function getTodayKSTDate(): string {
  const now = new Date();
  // UTC → KST (9시간 더하기)
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().split('T')[0];
}

export async function POST() {
  try {
    const supabase = getSupabaseClient();
    const today = getTodayKSTDate();

    // 오늘 날짜의 방문 기록이 있는지 확인
    const { data: existingRecord } = await supabase
      .from('visitors')
      .select('visitor_count')
      .eq('visit_date', today)
      .single();

    if (existingRecord) {
      // 오늘 기록이 있으면 카운트 증가
      await supabase
        .from('visitors')
        .update({ visitor_count: existingRecord.visitor_count + 1 })
        .eq('visit_date', today);
    } else {
      // 오늘 첫 방문자면 새 기록 생성
      await supabase
        .from('visitors')
        .insert({ visit_date: today, visitor_count: 1 });
    }

    // 총 방문자 수 증가
    const { data: totalData } = await supabase
      .from('total_visitors')
      .select('total_count')
      .eq('id', 1)
      .single();

    if (totalData) {
      await supabase
        .from('total_visitors')
        .update({ total_count: totalData.total_count + 1 })
        .eq('id', 1);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('방문 기록 오류:', error);
    return NextResponse.json({ error: '방문 기록 실패' }, { status: 500 });
  }
}

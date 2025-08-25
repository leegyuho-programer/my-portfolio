import { getSupabaseClient } from '@/lib/supabase/supabase';
import { getTodayKSTDate } from '@/utils/date';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = getSupabaseClient();
    const today = getTodayKSTDate();

    // 오늘 방문자 수
    const { data: todayData } = await supabase
      .from('visitors')
      .select('visitor_count')
      .eq('visit_date', today)
      .single();

    // 총 방문자 수
    const { data: totalData } = await supabase
      .from('total_visitors')
      .select('total_count')
      .eq('id', 1)
      .single();

    return NextResponse.json({
      today: todayData?.visitor_count || 0,
      total: totalData?.total_count || 0,
    });
  } catch (error) {
    console.error('방문자 수 조회 오류:', error);
    return NextResponse.json({ today: 0, total: 0 }, { status: 500 });
  }
}

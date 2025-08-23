import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase/supabase';

export async function GET() {
  try {
    const supabase = getSupabaseClient();
    const today = new Date().toISOString().split('T')[0];

    // 오늘 방문자 수 조회
    const { data: todayData } = await supabase
      .from('visitors')
      .select('visitor_count')
      .eq('visit_date', today)
      .single();

    // 총 방문자 수 조회
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
    return NextResponse.json({ error: '조회 실패' }, { status: 500 });
  }
}

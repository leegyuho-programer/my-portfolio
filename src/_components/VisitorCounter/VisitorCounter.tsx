import getTodayKSTDate from '@/app/api/track-visitor/route';
import { getSupabaseClient } from '@/lib/supabase/supabase';

async function getVisitorCount() {
  const supabase = getSupabaseClient();
  const today = getTodayKSTDate();

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

  return {
    today: todayData?.visitor_count || 0,
    total: totalData?.total_count || 0,
  };
}

export default async function VisitorCounter() {
  const visitorCount = await getVisitorCount();

  return (
    <div className='w-full py-4 text-center md:text-sm text-xs text-gray-400'>
      © 2025 GYUHO LEE — Visitors: {visitorCount.today.toLocaleString()} /{' '}
      {visitorCount.total.toLocaleString()}
    </div>
  );
}

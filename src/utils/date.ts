// 한국 시간(KST, UTC+9) 기준 오늘 날짜 반환 (YYYY-MM-DD)
export function getTodayKSTDate(): string {
  const now = new Date();
  // UTC → KST (9시간 더하기)
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().split('T')[0];
}

export const pad = (n: number) => String(n).padStart(2, '0');
export const timeFormatter = (t: number) => `${pad(Math.floor(t / 60))}:${pad(t % 60)}`;

/**
 * 날짜 포맷팅
 * @param date 
 * @returns
 */
export const formatDate = (date: Date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(
    date.getMinutes(),
  )}:${pad(date.getSeconds())}`;

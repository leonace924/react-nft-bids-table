export const getDateDiff = (timeStamp: number) => {
  const date = new Date(timeStamp * 1000);
  const nowDate = Date.now();

  const now = typeof nowDate === 'object' ? nowDate : new Date(nowDate).getTime();
  const diff = now - (typeof date === 'object' ? date : new Date(date)).getTime();

  return { diff, isFuture: diff < 0 };
};

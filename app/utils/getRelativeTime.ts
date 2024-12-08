import dayjs, {Dayjs} from 'dayjs';

export const isInThePast = (targetTime: Dayjs) => {
  const now = dayjs();
  return targetTime.isBefore(now);
};

export const getRelativeTime = (targetTime: Dayjs) => {
  return isInThePast(targetTime)
    ? 'Đã hết hạn'
    : `Còn ${targetTime.fromNow(true)}`;
};

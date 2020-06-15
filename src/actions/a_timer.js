export const TIME_COURSE = 'TIMER_IN_COURSE';
export const STOP_TIMER = 'STOP_TIMER';

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const timerCourse = (timer) => ({
  type: TIME_COURSE,
  timer,
});

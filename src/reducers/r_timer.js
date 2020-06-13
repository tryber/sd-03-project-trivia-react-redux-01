const TIME_COURSE = "TIMER_IN_COURSE";
const STOP_TIMER = "STOP_TIMER";

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const timerCourse = (timer) => ({
  type: TIME_COURSE,
  timer,
});

const INITIAL_STATE = {
  time: 30,
};

export const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIME_COURSE:
      return {
        ...state,
        time: action.timer,
      };
    case STOP_TIMER:
      clearInterval();
      return {
        ...state,
      };
    default:
      return state;
  }
};

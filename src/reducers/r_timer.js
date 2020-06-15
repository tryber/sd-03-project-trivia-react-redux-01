import { TIME_COURSE, STOP_TIMER } from '../actions/a_timer';

const INITIAL_STATE = {
  time: 30,
};

const timer = (state = INITIAL_STATE, action) => {
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

export default timer;

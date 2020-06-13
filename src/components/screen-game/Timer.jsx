import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timerCourse, stopTimer } from '../../reducers/r_timer';

class Timer extends Component {
  componentDidMount() {
    const { timer, setTime, stopTime } = this.props;
    (setInterval(() => {
      if (timer === 10) return stopTime();
      timer -= 1;
      return setTime(timer);
    }, 100));
  }

  render() {
    const { timer } = this.props;
    return (
      <div>
        {timer}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.timer.time,
});

const mapDispatch = (dispatch) => ({
  setTime: (timer) => dispatch(timerCourse(timer)),
  stopTime: () => dispatch(stopTimer()),
});

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  stopTime: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatch)(Timer);

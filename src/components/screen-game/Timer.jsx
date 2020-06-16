import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timerCourse, stopTimer } from '../../actions/a_timer';

class Timer extends Component {
  componentDidMount() {
    this.updateTimer();
  }

  updateTimer() {
    const { setTime, stopTime } = this.props;
    let { timer } = this.props;
    (setInterval(() => {
      if (timer === 0) return stopTime();
      timer -= 1;
      return setTime(timer);
    }, 1000));
  }

  render() {
    const { timer } = this.props;
    return (
      <div>
        Tempo: {timer}
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

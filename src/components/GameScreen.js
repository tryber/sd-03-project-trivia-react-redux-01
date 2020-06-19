import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchQuestions } from '../actions/index';
import getToken from '../service/getApiToken';
import Header from './Header';
import GetQuestions from './Questions';
import Aswer from './Aswer';

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      proximoTurno: 0,
      timer: 30,
    }
    this.nextQuest = this.nextQuest.bind(this);
    this.endGame = this.endGame.bind(this);
    this.changeState = this.changeState.bind(this);
    this.timer = this.timer.bind(this);
  }

  async componentDidMount() {
    const { fetchQuestion } = this.props;
    await getToken();
    await fetchQuestion(localStorage.getItem('token'));
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  changeState() {
    this.setState({ selected: true });
  }

  timer() {
    const interval = setInterval(() => {
      this.setState((state) => {
        if (state.timer > 1) {
          return { timer: state.timer - 1 };
        }
        return { timer: 0, selected: true };
      });
    }, 1000);
    this.setState({ interval });
  }

  nextQuest() {
    const { data } = this.props;
    const { proximoTurno } = this.state;
    if (proximoTurno === data.length - 1) return this.endGame();
    this.setState((prevState) => ({
      proximoTurno: prevState.proximoTurno + 1,
      selected: false,
      timer: 30,
    }));
  }

  endGame() {
    const { history } = this.props;
    history.push('/feedback');
  }

  render() {
    const { data } = this.props;
    const { selected, proximoTurno, timer } = this.state;
    if (data) {
      return (
        <div>
          <Header />
          {timer}
          <GetQuestions data={data[proximoTurno]} />
          <Aswer data={data[proximoTurno]} changeState={this.changeState} selected={selected} />
          {selected && <button data-testid="btn-next" onClick={this.nextQuest}>Proxima</button>}
        </div>
      );
    }
    return (<p>Loading</p>);
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.reducerQuestions.isFetching,
  data: state.reducerQuestions.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: (token) => dispatch(fetchQuestions(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);

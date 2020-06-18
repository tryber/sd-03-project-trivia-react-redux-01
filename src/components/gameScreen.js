import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { dispatchAction } from '../actions/index';
import getToken from '../service/getApiToken';
import Header from '../components/header';

class gameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      turn: 0,
      timer: 30,
    }
  }

  componentDidMount() {
    const { fetchQuestion } = this.props;
    getToken()
      .then(({ token }) => {
        localStorage.setItem('token', token);
        fetchQuestion(localStorage.getItem('token'));
      })
      console.log('get',getToken())
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.reducerQuestions.isFetching,
  data: state.reducerQuestions.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: (token) => dispatch(dispatchAction(token)),
})

export default connect(mapStateToProps,mapDispatchToProps)(gameScreen);

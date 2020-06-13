import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class Loading extends Component {

  render() {
    const { data } = this.props;
    return (
      <div>
        {(data.length > 0) && <Redirect to="/game" />}
        <p>Loading...</p>
      </div>
    );
  }
}

const mapState = (state) => ({
  data: state.tokenAndQuestions.data,
});

export default Loading

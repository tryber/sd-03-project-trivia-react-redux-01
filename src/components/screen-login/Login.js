import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTokenUser } from '../../actions/a-token';


class Login extends Component {
  componentDidMount() {
    const { requestApiToken } = this.props;
    requestApiToken();
  }
  render() {
    return (
      <div>
        <header>
          <label>Email Gravatar
            <input type='email' />
          </label>
          <label>
            <input type='Text' />
          </label>
        </header>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestApiToken: () => dispatch(getTokenUser()),
});

export default connect(null, mapDispatchToProps)(Login)

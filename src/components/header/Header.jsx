import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name, score} = this.props;
    return (
      <div>
        <header data-testid="header-profile-picture" />
    <div data-testid="header-player-name">{name}</div>
    <div data-testid="header-score">{score}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
score: JSON.parse(localStorage.getItem('state'))?.player?.score || 0,
name: JSON.parse(localStorage.getItem('state'))?.player?.name || 'Nome da pessoa',
});

export default connect(mapStateToProps)(Header);


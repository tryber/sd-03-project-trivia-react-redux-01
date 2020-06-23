import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends Component {
  render() {
    const { name, score } = this.props;
    return (
      <div>
        <header data-testid="header-profile-picture" />
        <div data-testid="header-player-name">{name}</div>
        <div data-testid="header-score">{score}</div>
      </div>
    );
  }
}

const mapStateToProps = () => ({
  score: JSON.parse(localStorage.getItem('state')).player.score || 0,
  name: JSON.parse(localStorage.getItem('state')).player.name || 'Nome da pessoa',
});

Header.propTypes = {
  name: Proptypes.string,
  score: Proptypes.number,
};

export default connect(mapStateToProps)(Header);

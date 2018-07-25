import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import { ReactComponent as IconExternalLink } from '../images/icon-external-link.svg';

const AppLink = ({ to, exact, children }) => {
  return (
    <NavLink exact={exact} to={to} className="app-nav__link" activeClassName="app-nav__link--active">
      {children}
    </NavLink>
  );
};

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="app-header__item app-logo">
        <img src={logo} className="app-logo__image" alt="logo" />
        <span className="app-logo__text">React Workshop</span>
      </div>
      <nav className="app-header__item app-nav">
        <AppLink exact to="/">
          Home
        </AppLink>
        <AppLink to="/session1">Session 1</AppLink>
        <AppLink to="/session2">Session 2</AppLink>
        <AppLink to="/session3">Session 3</AppLink>
        <AppLink to="/session4">Session 4</AppLink>
        <AppLink to="/session5">Session 5</AppLink>
        <AppLink to="/session6">Session 6</AppLink>
      </nav>
      <div className="app-header__item app-info">
        <span>v2.0</span>
        <a href="https://github.com/ecris87/react-workshop">
          <span>Repo</span>
          <IconExternalLink className="app-icon" />
        </a>
      </div>
    </header>
  );
};

export default AppHeader;

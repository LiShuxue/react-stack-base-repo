import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './header.less';
import logo from '../../assets/images/logo.png';

import SwitchTheme from 'components/switchTheme';

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <img className="header-icon" src={logo} alt="Ratan One" />
      <div className="header-nav">
        <NavLink to="/query" className="link" activeClassName="active">
          Trade Query
        </NavLink>
        <NavLink to="/exceptions" className="link" activeClassName="active">
          Exceptions
        </NavLink>
        <NavLink to="/rules" className="link" activeClassName="active">
          Rules
        </NavLink>
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Header;

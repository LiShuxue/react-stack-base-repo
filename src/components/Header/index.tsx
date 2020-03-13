import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';
import logo from 'src/assets/images/logo.png';

import SwitchTheme from 'components/SwitchTheme';

const Header: FC = () => {
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

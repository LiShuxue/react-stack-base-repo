import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';
import logo from 'src/assets/images/logo.png';

import SwitchTheme from 'components/SwitchTheme';

const Header: FC = () => {
  return (
    <div className="header">
      <img className="header-icon" src={logo} alt="logo" />
      <div className="header-nav">
        <NavLink to="/page1" className="link" activeClassName="active">
          page1
        </NavLink>
        <NavLink to="/page2" className="link" activeClassName="active">
          page2
        </NavLink>
        <NavLink to="/page3" className="link" activeClassName="active">
          page3
        </NavLink>
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Header;

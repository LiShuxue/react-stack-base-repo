import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './header.less';
import logo from '../../assets/images/logo.png';

const Header: React.FunctionComponent = () => {
  return (
    <div className='header'>
      <img src={logo} height='36' alt='Ratan One'/>
      <div className='header-nav'>
        <NavLink to='/query' className='link' activeClassName='active'>Trade Query</NavLink>
        <NavLink to='/exceptions' className='link' activeClassName='active'>Exceptions</NavLink>
        <NavLink to='/rules' className='link' activeClassName='active'>Rules</NavLink>
      </div>
    </div>
  );
}

export default Header;
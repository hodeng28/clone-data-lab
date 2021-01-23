import React from 'react';
import { NavLink } from 'react-router-dom';
 

const Nav = () => {
  return (
    <>
      <ul>
          <li>
            <NavLink exact to="/">
              데이터랩 홈
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              급상승 검색어
            </NavLink>
          </li>
          <li>
            <NavLink to="/Statisitcs">
              지역통계
            </NavLink>
          </li>
        </ul>
      </>
  )
};

export default Nav;
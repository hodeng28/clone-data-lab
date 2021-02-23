import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/search">급상승 검색어</NavLink>
        </li>
        <li>
          <NavLink to="/Statistics">지역통계</NavLink>
        </li>
        <li>
          <NavLink to="/AgeTrend">월별 트렌드-데이지</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;

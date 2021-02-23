import { Menu } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [current, setCurrent] = useState("home");
  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <NavLink exact to="/">
            데이터랩 홈
          </NavLink>
        </Menu.Item>
        <Menu.Item key="search">
          <NavLink to="/search">급상승 검색어</NavLink>
        </Menu.Item>
        <Menu.Item key="statistics">
          <NavLink to="/Statistics">지역통계</NavLink>
        </Menu.Item>
        <Menu.Item key="ageTrend">
          <NavLink to="/AgeTrend">월별 트렌드-데이지</NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Nav;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink exact to="/">
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/bestItem">베스트</NavLink>
        </li>
        <li>
          <NavLink to="/recommand">추천</NavLink>
        </li>
        <li>
          <NavLink to="/thema">테마</NavLink>
        </li>
        <li>
          <NavLink to="/event">기획전</NavLink>
        </li>
        <li>
          <NavLink to="/sale">세일상품</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;

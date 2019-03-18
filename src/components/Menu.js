import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {

  render() {
    const activeStyle = {
      color : 'green',
      fontSize : '2rem'
    }
    return (
      <div>
        <ul>
          <li><NavLink exact to="/" activeStyle={activeStyle} > Home </NavLink> </li>
          <li><NavLink exact to="/about" activeStyle={activeStyle} > About </NavLink> </li>
          <li><NavLink exact to="/about/sungeunp" activeStyle={activeStyle} > About Sungeunp </NavLink> </li>
          {/* query는 NavLink컴포넌트에서 매칭 할 수 없음 (쿼리를 제외한 url만 매칭 가능) */}
          {/* <li><NavLink to="/about/sungeunp?detail=true" activeStyle={activeStyle} > About Sungeunp detail </NavLink> </li> */}
          <li><NavLink to="/posts" activeStyle={activeStyle} > Post list </NavLink> </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default Menu;
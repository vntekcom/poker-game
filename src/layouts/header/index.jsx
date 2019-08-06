import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';

const Header = ({loginUser}) => {
  // const loginUser = JSON.parse(localStorage.getItem('userlogin'));
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
        G A M E B À I
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={{ color: "white" }}
              to="/signup"
            >
              Đăng ký
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={{ color: "white" }}
              to="/signin"
            >
              Đăng nhập
            </NavLink>
          </li>
        </ul>

        <p className="text-white m-0">Xin chào, {loginUser && loginUser.TaiKhoan} </p>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    loginUser: state.user.userProfile
  };
};
export default connect(mapStateToProps,null) (Header);

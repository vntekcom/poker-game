import React from "react";
import { Route, Redirect } from "react-router-dom";

const Guard = ({ component: Component, path }) => {
  return (
    <Route
      to={path}
      render={routeProps => {
        if (localStorage.getItem("userlogin")) {
          return <Component {...routeProps} />;
        } else {
          alert("Vui lòng đăng nhập!");
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

export default Guard;

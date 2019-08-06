import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../store/actions";
//IMPORT COMPONENTS
import Signup from "./../screens/auth/signup";
import Signin from "./../screens/auth/signin";
import Home from "./../screens/home";
import Header from "../layouts/header";
import LoginGuard from "./../components/guard";
import Game from './../screens/game';

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <LoginGuard path="/home" component={Home} />
            <LoginGuard path="/game" component={Game} />
            <Redirect to="/home" />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
  componentDidMount() { //chạy sau khi render hoàn tất
    const user = localStorage.getItem("userlogin");
    if (user) {
      this.props.onLoadUserProfile(JSON.parse(user));
    }
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLoadUserProfile: user => {
      dispatch(loginUser(user));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Layout);

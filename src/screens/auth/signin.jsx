import React, { Component } from "react";
// import Axios from "axios";
import { connect } from "react-redux";
import { requestLoginUser } from "../../store/actions";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TaiKhoan: "",
      MatKhau: ""
    };
  }

  handelOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    // Axios({
    //   method: "POST",
    //   url: `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${
    //     this.state.TaiKhoan
    //   }&MatKhau=${this.state.MatKhau}`
    //   // data: this.state
    // })
    //   .then(res => {
    //     if (typeof res.data !== "string") {
    //       // alert("Đăng nhập thành công!");
    //       localStorage.setItem("userlogin", JSON.stringify(res.data));
    //       this.props.loginUser(res.data);
    //       this.props.history.push("/home");
    //     } else {
    //       alert("Đăng nhập sai!");
    //     }

    //     // this.props.history.replace("/signin"); //ko back lại được
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.props.onLogin(this.state.TaiKhoan,this.state.MatKhau,()=>{
      this.props.history.push("/home");
    })
  };

  render() {
    return (
      <div className="w-25 mx-auto">
        <form onSubmit={this.handleOnSubmit}>
          <h1>Đăng nhập</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Tài khoản"
              className="form-control"
              name="TaiKhoan"
              onChange={this.handelOnChange}
              value={this.state.TaiKhoan}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Mật khẩu"
              className="form-control"
              name="MatKhau"
              onChange={this.handelOnChange}
              value={this.state.MatKhau}
              maxLength="12"
              minLength="6"
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Đăng nhập
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username,password,callback) => {
      dispatch(requestLoginUser(username,password,callback));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Signin);

import React, { Component } from "react";
import Axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TaiKhoan: "",
      MatKhau: "",
      Email: "",
      SoDT: "",
      MaNhom: "GP01",
      MaLoaiNguoiDung: "KhachHang"
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
    Axios({
      method: "POST",
      url: "http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: this.state
    })
      .then(res => {
        alert("Đăng ký thành công!")
        // this.props.history.push('/signin');
        this.props.history.replace('/signin'); //ko back lại được
      })
      .catch(err => {
        console.log(err)
      });
  };

  render() {
    return (
      <div className="w-25 mx-auto">
        <form onSubmit={this.handleOnSubmit}>
          <h1>Đăng ký</h1>
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
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              name="Email"
              onChange={this.handelOnChange}
              value={this.state.Email}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Số điện thoại"
              className="form-control"
              name="SoDT"
              onChange={this.handelOnChange}
              value={this.state.SoDT}
              required
            />
          </div>
          <button className="btn btn-success" type="submit">
            Đăng ký
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;

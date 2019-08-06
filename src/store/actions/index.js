import * as types from "../constants";
import Axios from "axios";

//action center
export const requestLoginUser = (username,password,callback) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${
        username
      }&MatKhau=${password}`
    })
      .then(res => {
        if (typeof res.data !== "string") {
          // alert("Đăng nhập thành công!");
          localStorage.setItem("userlogin", JSON.stringify(res.data));
          // this.props.loginUser(res.data);alan
          dispatch(loginUser(res.data));
          callback();
        } else {
          alert("Đăng nhập sai!");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const loginUser = user => {
  return {
    type: types.LOGIN_USER,
    payload: user
  };
};

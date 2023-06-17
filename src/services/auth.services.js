import axios from "axios";
import jwt_decode from "jwt-decode";

const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      console.log(res);
      callback(true, res.data.token);
    })
    .catch((err) => {
      // console.log(err);
      callback(false, err);
    });
};

export const getUsername = (token) => {
  const decoded = jwt_decode(token);
  console.log(decoded);
};

export default login;

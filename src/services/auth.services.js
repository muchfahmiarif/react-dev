import axios from "axios";

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

export default login;

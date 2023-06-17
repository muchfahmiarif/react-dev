import axios from "axios";

const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      // console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      // console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getProducts;

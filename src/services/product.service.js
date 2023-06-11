import axios from "axios";

const getProducts = () => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getProducts;

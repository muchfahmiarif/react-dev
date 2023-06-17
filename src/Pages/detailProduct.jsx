import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

const DetailProduct = () => {
  const { id } = useParams(); // useParams untuk mengambil parameter dari url
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      // console.log(data);
      setProduct(data);
    });
  }, [id]);
  console.log(product);
  return <div>detailProduct : {product.title}</div>;
};

export default DetailProduct;

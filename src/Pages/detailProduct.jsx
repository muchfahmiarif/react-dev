import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

const DetailProduct = () => {
  const { id } = useParams(); // useParams untuk mengambil parameter dari url

  useEffect(() => {
    getDetailProduct(id, (data) => {
      console.log(data);
    });
  }, [id]);
  return <div>detailProduct : {id}</div>;
};

export default DetailProduct;

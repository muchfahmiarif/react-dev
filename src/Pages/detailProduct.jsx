import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  return <div>detailProduct : {id}</div>;
};

export default DetailProduct;

import CardProduct from "../components/Fragments/CardProduct";

const product = () => {
  return (
    <div className="flex justify-center">
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body></CardProduct.Body>
        <CardProduct.Footer />
      </CardProduct>
    </div>
  );
};

export default product;

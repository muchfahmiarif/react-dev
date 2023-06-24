import CardProduct from "../components/Fragments/CardProduct";
import { Fragment, useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import getProducts from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-300 text-slate-800 items-center px-10">
        {username}
        <Button color={`ml-5 bg-black`} onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} id={item.id} />
                <CardProduct.Body title={item.title}>{item.description}</CardProduct.Body>
                <CardProduct.Footer id={item.id}>{item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default Products;

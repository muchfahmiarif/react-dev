import CardProduct from "../components/Fragments/CardProduct";
import { Fragment, useContext, useEffect, useState } from "react";
import getProducts from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const Products = () => {
  const [products, setProducts] = useState([]);
  useLogin();
  const { darkMode } = useContext(DarkMode);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={`flex justify-center gap-2 mt-2 ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}>
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

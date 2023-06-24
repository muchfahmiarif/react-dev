import CardProduct from "../components/Fragments/CardProduct";
import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import getProducts from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const total = cart.reduce((prev, item) => {
        const product = products.find((product) => product.id === item.id);
        return prev + product.price * item.qty;
      }, 0);
      setTotalPrice(total);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

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
                <CardProduct.Footer id={item.id} handleAddToCart={handleAddToCart}>
                  {item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                </CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          {/* <TableCart products={products} /> */}
          <table className="text-left table-auto border-separate border-spacing-x-5 ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((items) => {
                  const product = products.find((item) => item.id === items.id);
                  return (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{items.qty}</td>
                      <td>{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                      <td>{(items.qty * product.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan="3">
                  <b>Total</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;

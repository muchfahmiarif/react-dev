/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products } = props;
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = useSelector((state) => {
    return state.cart.data; // cart diambil dari nama reducer dan data diambil dari nama state
  });

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

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
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
  );
};

export default TableCart;

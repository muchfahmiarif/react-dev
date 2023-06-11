import CardProduct from "../components/Fragments/CardProduct";
import shoes from "../../public/fashion-shoes-sneakers.jpg";
import { Fragment, useEffect, useState } from "react";
import Button from "../components/Elements/Button";

// eslint-disable-next-line react-refresh/only-export-components
const products = [
  {
    id: 1,
    title: "Sepatu Lama",
    price: 1000000,
    image: shoes,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus id voluptate cum culpa possimus veniam, error, velit repudiandae amet voluptates laborum ullam beatae quasi nesciunt suscipit delectus facere praesentium at.",
  },
  {
    id: 2,
    title: "Sepatu Baru",
    price: 2000000,
    image: shoes,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus id voluptate cum culpa possimus veniam, error, velit repudiandae amet voluptates laborum ullam beatae quasi nesciunt suscipit delectus facere praesentium at.",
  },
  {
    id: 3,
    title: "Sepatu Keren",
    price: 3000000,
    image: shoes,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus id voluptate cum culpa possimus veniam, error, velit repudiandae amet voluptates laborum ullam beatae quasi nesciunt suscipit delectus facere praesentium at.",
  },
];

const email = localStorage.getItem("email");

const Product = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart([
      {
        id: 1,
        qty: 1,
      },
    ]);
  }, []);

  useEffect(() => {
    const total = cart.reduce((prev, item) => {
      const product = products.find((product) => product.id === item.id);
      return prev + product.price * item.qty;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-300 text-slate-800 items-center px-10">
        {email}
        <Button color={`ml-5 bg-black`} onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        <div className="w-3/4 flex flex-wrap">
          {products.map((item) => (
            <CardProduct key={item.id}>
              <CardProduct.Header image={item.image} />
              <CardProduct.Body title={item.title}>{item.description}</CardProduct.Body>
              <CardProduct.Footer id={item.id} handleAddToCart={handleAddToCart}>
                {item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
              </CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          {/* <ul>
            {cart.map((item) => (
              <li key={item.name}>{item.id}</li>
            ))}
          </ul> */}
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
              {cart.map((items) => {
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
              <tr>
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

export default Product;

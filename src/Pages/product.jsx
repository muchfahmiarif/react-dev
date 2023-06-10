import CardProduct from "../components/Fragments/CardProduct";
import shoes from "../../public/fashion-shoes-sneakers.jpg";
import { Fragment, useState } from "react";
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
  const [cart, setCart] = useState([
    {
      name: "Sepatu Lama",
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
              <CardProduct.Footer>Rp {item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;

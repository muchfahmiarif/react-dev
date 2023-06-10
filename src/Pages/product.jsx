import CardProduct from "../components/Fragments/CardProduct";
import shoes from "../../public/fashion-shoes-sneakers.jpg";
import { Fragment } from "react";

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
  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-300 text-slate-800 items-center px-10">{email}</div>
      <div className="flex justify-center gap-2">
        {products.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} />
            <CardProduct.Body title={item.title}>{item.description}</CardProduct.Body>
            <CardProduct.Footer>{item.price}</CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default Product;

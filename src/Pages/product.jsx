import CardProduct from "../components/Fragments/CardProduct";
import shoes from "../../public/fashion-shoes-sneakers.jpg";

const product = () => {
  return (
    <div className="flex justify-center">
      <CardProduct>
        <CardProduct.Header image={shoes} />
        <CardProduct.Body title="Test">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus id voluptate cum culpa possimus veniam, error, velit repudiandae amet
          voluptates laborum ullam beatae quasi nesciunt suscipit delectus facere praesentium at.
        </CardProduct.Body>
        <CardProduct.Footer>Rp 1.000.000</CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default product;

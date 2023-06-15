/* eslint-disable react/prop-types */
import Button from "../Elements/Button";

const CardProduct = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">{children}</div>;
};

const Footer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{children}</span>
      <Button color="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Buy Now
      </Button>
    </div>
  );
};

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </a>
  );
};

const Body = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-white text-xl font-semibold tracking-tight">{title.substring(0, 20)} ...</h5>
        <p className="text-sm text-white">{children.substring(0, 100)} ...</p>
      </a>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

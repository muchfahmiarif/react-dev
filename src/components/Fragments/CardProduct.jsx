import Button from "../Elements/Button";

const CardProduct = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">{children}</div>;
};

const Footer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{children}</span>
      <Button color="bg-blue-600">Buy Now</Button>
    </div>
  );
};

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-white text-xl font-semibold tracking-tight">{title}</h5>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

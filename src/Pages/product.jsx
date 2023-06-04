import Button from "../components/Elements/Button";
import shoes from "/fashion-shoes-sneakers.jpg";

const product = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
        <a href="#">
          <img src={shoes} alt="product" className="p-8 rounded-t-lg" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-white text-xl font-semibold tracking-tight">Sepatu baru</h5>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error ducimus, nam fugit dolor qui sit, nulla tempore officia odit amet
              iusto quod ipsa id illum doloremque, esse nesciunt! Quis?
            </p>
          </a>
        </div>
        <div className="flex items-center justify-between px-5 pb-5">
          <span className="text-xl font-bold text-white">Rp 1.000.000</span>
          <Button color="bg-blue-600">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default product;

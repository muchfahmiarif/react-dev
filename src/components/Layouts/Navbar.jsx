import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../hooks/useTotal";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => {
    return state.cart.data;
  });
  const { darkMode, setDarkMode } = useContext(DarkMode);
  const totalPrice = useTotalPrice();

  useEffect(() => {
    const total = cart.reduce((prev, item) => {
      return prev + item.qty;
    }, 0);
    setTotalCart(total);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-10 bg-blue-300 text-slate-800 items-center px-10">
      {username}
      <Button color={`ml-5 bg-black`} onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-400 p-2 rounded ml-5">
        item : {totalCart} | price : {totalPrice.total}
      </div>
      <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light" : "Dark"}</button>
    </div>
  );
};

export default Navbar;

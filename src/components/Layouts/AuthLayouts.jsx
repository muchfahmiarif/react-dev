import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

/* eslint-disable react/prop-types */
const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { darkMode, setDarkMode } = useContext(DarkMode);

  console.log(darkMode);

  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
      {children}
      <p className="mt-3">
        {/* Ternary operation */}
        {type === "login" ? `Don't have an account? ${" "}` : `Already have an account? ${" "}`}
        {type === "login" ? (
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        ) : (
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        )}
      </p>
    </div>
  );
};

export default AuthLayouts;

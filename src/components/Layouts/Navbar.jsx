import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";

const Navbar = () => {
  const username = useLogin();

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
    </div>
  );
};

export default Navbar;

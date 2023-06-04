import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <div className="flex justify-center bg-white min-h-screen items-center">
      <AuthLayouts title="Login">
        <FormLogin />
        <p className="mt-3">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;

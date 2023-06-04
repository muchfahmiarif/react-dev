import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <div className="flex justify-center bg-white min-h-screen items-center">
      <AuthLayouts title="Login">
        <FormLogin />
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;

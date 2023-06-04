import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <div className="flex justify-center bg-white min-h-screen items-center">
      <AuthLayouts title="Register">
        <FormRegister />
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;

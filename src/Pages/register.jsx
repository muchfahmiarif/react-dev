import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <div className="flex justify-center bg-white min-h-screen items-center">
      <AuthLayouts title="Register">
        <FormRegister />
        <p className="mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;

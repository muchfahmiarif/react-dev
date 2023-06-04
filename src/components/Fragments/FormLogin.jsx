import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm title="Email" type="email" placeholder="example@email.com" name="email" />
      <InputForm title="Password" type="password" placeholder="*****" name="password" />
      <Button color="bg-blue-600">Log In</Button>
    </form>
  );
};

export default FormLogin;

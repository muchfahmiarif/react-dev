import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm title="Full Name" type="text" placeholder="Enter Your Full Name" name="name" />
      <InputForm title="Email" type="email" placeholder="example@email.com" name="email" />
      <InputForm title="Password" type="password" placeholder="*****" name="password" />
      <InputForm title="Confirm Password" type="password" placeholder="*****" name="password" />
      <Button color="bg-blue-600">Register</Button>
    </form>
  );
};

export default FormRegister;

import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = () => {
    console.log("anda mengklik tombol ini");
  };
  return (
    <form>
      <InputForm title="Email" type="email" placeholder="example@email.com" name="email" />
      <InputForm title="Password" type="password" placeholder="*****" name="password" />
      <Button color="bg-blue-600" onClick={handleLogin} type="submit">
        Log In
      </Button>
    </form>
  );
};

export default FormLogin;

import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault(); // untuk mencegah reload
    console.log("anda mengklik tombol ini");
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm title="Email" type="email" placeholder="example@email.com" name="email" />
      <InputForm title="Password" type="password" placeholder="*****" name="password" />
      <Button color="bg-blue-600" type="submit">
        Log In
      </Button>
    </form>
  );
};

export default FormLogin;

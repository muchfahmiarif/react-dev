import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault(); // untuk mencegah reload
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log("anda mengklik tombol ini");
    window.location.href = "/product";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm title="Email" type="email" placeholder="example@email.com" name="email" ref={emailRef} />
      <InputForm title="Password" type="password" placeholder="*****" name="password" />
      <Button color="bg-blue-600" type="submit">
        Log In
      </Button>
    </form>
  );
};

export default FormLogin;

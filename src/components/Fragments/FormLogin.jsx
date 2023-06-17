import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";
import login from "../../services/auth.services";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault(); // untuk mencegah reload
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
    // console.log("anda mengklik tombol ini");
    // window.location.href = "/product";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res.token);
      } else {
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm title="Username" type="text" placeholder="Jhon Doe" name="username" ref={usernameRef} />
      <InputForm title="Password" type="password" placeholder="*****" name="password" />
      <Button color="bg-blue-600" type="submit">
        Log In
      </Button>
    </form>
  );
};

export default FormLogin;

import "./App.css";
import Button from "./components/Elements/Button";
import InputForm from "./components/Elements/Input";

function App() {
  return (
    <div className="flex justify-center bg-white min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
        <form action="">
          <InputForm title="Email" type="email" placeholder="example@email.com" name="email" />
          <InputForm title="Password" type="password" placeholder="*****" name="password" />
          <Button color="bg-blue-600">Log In</Button>
        </form>
      </div>
    </div>
  );
}

export default App;

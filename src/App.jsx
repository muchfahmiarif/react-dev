import "./App.css";
import FormLogin from "./components/Fragments/FormLogin";

function App() {
  return (
    <div className="flex justify-center bg-white min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
        <FormLogin />
      </div>
    </div>
  );
}

export default App;

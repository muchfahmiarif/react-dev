import "./App.css";
import Button from "./components/Elements/Button";

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-2">
        <Button variant="bg-slate-800">Log In</Button>
        <Button variant="bg-red-800">Log Out</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;

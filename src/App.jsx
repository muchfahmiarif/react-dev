import "./App.css";

const Button = (props) => {
  return <button className={`h-10 px-6 font-semibold rounded-md hover:bg-slate-600 text-white ${props.variant}`}>{props.children}</button>;
};

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

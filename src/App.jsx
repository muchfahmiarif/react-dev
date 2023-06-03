import "./App.css";

const Button = (props) => {
  return <button className={`h-10 px-6 font-semibold rounded-md hover:bg-slate-600 text-white ${props.variant}`}>Buy Now</button>;
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-2">
        <Button variant="bg-slate-800" />
        <Button variant="bg-red-800" />
      </div>
    </div>
  );
}

export default App;

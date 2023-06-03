import React from "react";
import "./App.css";

class ButtonClass extends React.Component {
  render() {
    return <button className="h-10 px-6 font-semibold rounded-md bg-black hover:bg-slate-900 text-white">Buy Now</button>;
  }
}

const ButtonFunctional = () => {
  return <button className="h-10 px-6 font-semibold rounded-md bg-black/60 hover:bg-slate-900/60 text-white">Buy Now</button>;
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-2">
        <ButtonClass />
        <ButtonClass />
        <ButtonFunctional />
      </div>
    </div>
  );
}

export default App;

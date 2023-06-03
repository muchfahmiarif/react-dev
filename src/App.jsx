import React from "react";
import "./App.css";

class Button extends React.Component {
  render() {
    return <button className="h-10 px-6 font-semibold rounded-md bg-black hover:bg-slate-900 text-white">Buy Now</button>;
  }
}

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-2">
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App(){
  return (
    <div className="font-poppins bg-white text-gray-800">
      <Navbar />
      <main className="pt-20">
        <Home />
      </main>
    </div>
  );
}

export default App;

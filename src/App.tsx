import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import OutputWindow from "./components/OutputWindow";
import UserInput from "./components/UserInput";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-mainSubColor to-mainColor h-screen grid" id="mainCont">
      <Header />
      <OutputWindow />
      <UserInput />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import OutputWindow from "./components/OutputWindow";
import UserInput from "./components/UserInput";
import Footer from "./components/Footer";

function App() {
  const [outputValue, setOutputValue] = useState('')

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center space-y-20 py-14" >
        <OutputWindow value={outputValue} />
        <UserInput  onInputChange={(value) => setOutputValue(value)}/>
      </main>
      <Footer />
    </>
  );
}

export default App;

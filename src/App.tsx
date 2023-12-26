import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import OutputWindow from "./components/OutputWindow";
import UserInput from "./components/UserInput";
import Footer from "./components/Footer";

function App() {

  const [text, setText] = useState('');

  // get a random number

  const getRandomInt = (n: number) => {
    return Math.floor(Math.random() * n);
  }

  // shuffle the string in the output window

  const shuffle = (s: string) => {
    let arr = s.split('');

    for (let i = 0; i < arr.length - 1; i++) {
      let j = getRandomInt(arr.length);

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    s = arr.join('');
    return s
  }
  let s = text
  s = shuffle(s);

  return (
    <div className="bg-gradient-to-b from-mainSubColor to-mainColor h-screen grid overflow-hidden" id="mainCont">
      <Header />
      <OutputWindow s={s}/>
      <UserInput setText={setText}/>
      <Footer />
    </div>
  );
}

export default App;

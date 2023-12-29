import "./App.css";
import Header from "./components/Header";
import OutputWindow from "./components/OutputWindow";
import UserInput from "./components/UserInput";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center space-y-20 py-14" >
        <OutputWindow />
        <UserInput />
      </main>
      <Footer />
    </>
  );
}

export default App;

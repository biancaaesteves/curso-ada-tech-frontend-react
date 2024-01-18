import { useState } from "react";
import "./styles/global.css";
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { Refs } from "./components/Conceps/Refs";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <Header />
    <Tasks />

    <Refs />
    </>
  );
  
}

export default App;

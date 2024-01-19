import { useState } from "react";
import "./styles/global.css";
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { Refs } from "./components/Conceps/Refs";
import { Memoization } from "./components/Conceps/Memoization";

function App() {
  return (
    <>
    <Header />
    <Tasks />

    {/* <Refs /> */}

    <Memoization financialData={{ incomes: [50, 30, 20], outcomes: [5, 8, 4] }} />
    {/* O 1o conjunto de chaves é que vou passar um código JS. 
    O 2o conjunto de chaves é que vou passar um objeto dentro do JS.  */}
    </>
  );
  
}

export default App;

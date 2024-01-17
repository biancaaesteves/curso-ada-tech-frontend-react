import { useState } from "react";
import "./styles/global.css";
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';

function App() {
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   console.log('Executando a função do UseEffect...');

  //   // componentWillUnmont => Cleanup Function
  //   return () => {
  //     console.log("Isso aqui vai ser executado qdo o component app for desmontado da tela.")
  //   }

  // }, [toggle]);


  // O useEffect será disparado sempre que alguma variável do array de dependências for alterado. 

  // Por padrão, sempre o useEffect será disparado após a montagem do componente (componentDidMount)


  return (
    <>
    <Header />
    <Tasks />

    <button onClick={()=> setToggle(!toggle)}>Toggle</button>
    </>
  );
  
}

export default App;

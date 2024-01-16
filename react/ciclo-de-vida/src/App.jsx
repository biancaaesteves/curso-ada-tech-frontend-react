import React from "react";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  constructor() {
    super();

    this.state = { showCounter: false };
  }

  render () {
    return (
      <div>
        <h1>Ciclo de Vida no React</h1>
        <button onClick={() => {
          this.setState({ showCounter: !this.state.showCounter })
          // se clicar no botão, mude o estado para true (pois ele inicia com false)
        }}
        >
          { this.state.showCounter ? 'Remover Contador' : 'Mostrar Contador' }

          {/* // se o showCounter é true, mostre "Remover Contador". 
          // se o showCounter é false, mostre "Mostrar Contador" */}
        
        </button>

        { this.state.showCounter ? <Counter /> : null }

      </div>
    );
  }
 
}

export default App;

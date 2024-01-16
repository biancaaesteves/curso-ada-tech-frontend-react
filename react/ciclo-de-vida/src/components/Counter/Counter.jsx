import React from "react";

export class Counter extends React.Component {
constructor() {
  super();
 this.state = { contador: 0}
}

UNSAFE_componentWillMount() {
  // esse componente foi descontinuado
    console.log('O nosso componente contador será montado!');
}

componentDidMount() {
  // componentDidMount() substitui o componentWillMount()
  console.log('O componente foi montado! ✔');
  document.addEventListener('scroll', this.consoleScroll);
  
}

// método chamado sempre que uma prop ou estado for atualizado
shouldComponentUpdate() {
  return true;
}

UNSAFE_componentWillUpdate() {
  console.log("O componente será atualizado.");
  // re-render
}

componentDidUpdate() {
  console.
  log('O componente Counter foi atualizado. ✔')
}

componentWillUnmount() {
  console.log('O componente será desmontado.')
  // quando eu clicar em remover contador, o componente será desmontado.

  document.removeEventListener('scroll',this.consoleScroll);
}

consoleScroll() {
  console.log('Rolando a página... ')
}

  render () {
    console.log('Renderizando o componente counter...');
    return (
      <div>
      <h1>{this.state.contador}</h1>

      <button onClick={() => {
        this.setState({contador: this.state.contador -1})}}
      >
        Diminuir
        </button>
      <button onClick={() => {
        this.setState({contador: this.state.contador +1})}}
      >
        Aumentar</button>

    </div>
    )
  }
}
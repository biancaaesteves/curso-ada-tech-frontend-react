import React from "react";

export class Counter extends React.Component {
  constructor() {
    super() // herda tudo do React.Component
    // this.contador = 0; // criei uma var, que é atributo dessa classe.
    this.state = { contador: 0, name: "", password: ""};
  }

  render () {
    return (
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        <h1>{this.state.contador}</h1>

        <div>
        <button onClick={() => {
          // ! this.state.contador += this.state.contador;
          this.setState({contador: this.state.contador-1});
          }}
          >
            Diminuir</button>

        <button onClick={() => {
          this.setState({contador: this.state.contador+1});
           }}
           >
            Aumentar</button>
        </div>
        <form style={{ marginTop: "40px"}}>
          <input type="text"
          placeholder="Nome"
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value})
            // pega o conteúdo digitado dentro do input
          }}
          />
          <input
          type="password"
          placeholder="Senha"
          value={this.state.password}
          onChange={(event) => { 
            this.setState({password: event.target.value})
            // pega o conteúdo digitado dentro do input
          }}
          />
          <button>Enviar</button>
        </form>
      </div>
    )
  }
}
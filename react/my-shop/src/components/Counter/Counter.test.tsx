import "@testing-library/jest-dom"; // jest cria uma DOM virtual. 
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";
;

//* Organiza os testes
// describe: agrupa testes que tem caracteristicas em comum
describe('Counter > Unit Tests', () => {
  //* Teste 1: 
it('should render Counter component correctly', () => {
  render(<Counter/>);

  // a melhor coisa para pegar elementos do DOM é pelo getByRole.
  const counterValueElement = screen.getByRole('heading', {level: 1});  
  // Pega uma tag de cabeçalho de nível 1, ou seja, o <h1></h1> 

  const increaseButtonElement = screen.getByRole("button" , {name: "Aumentar"});
  const decreaseButtonElement = screen.getByRole("button" , {name: "Diminuir"});

  // getAllByRole: um array com os 2 botões
  
  expect(counterValueElement).toHaveTextContent("0");
  expect(increaseButtonElement).toBeInTheDocument();
  expect(decreaseButtonElement).toBeInTheDocument()
  //espero que o h1 tenha o texto 0 pq o contador inicia com 0. 
});

//* Teste 2:
it('should decrease counter value when increase button is clicked', () => {
  // renderizamos o componente counter
  render(<Counter />)

  // Clicar no botão 'Aumentar' para aumentar o valot do contador
  const increaseButton = screen.getByRole('button', {name: 'Aumentar'})

  userEvent.click(increaseButton); // simula o clique do usuário

  const counterValueElement = screen.getByText('1', {exact: true}) 
  // o texto dentro desse elemento tem que ser exatamente 1.

// Criei um botão de aumentar...
// e eu espero que o valor do contador seja 1:
expect(counterValueElement).toBeInTheDocument() ;

});
});


//* Se tivesse testes de integração, colocaria aqui:
describe('Counter > Integration tests', () => {

})








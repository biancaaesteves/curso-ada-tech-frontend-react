import { render, screen} from "@testing-library/react";
import {Cart} from "./Cart";
import { products } from "../../data/products";
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart.slice";

const cart = products.slice(0, 2); // obtendo os 2 primeiros produtos do array.
// o slice vai até o valor menor do que o valor que colocamos como final do param.
// Portanto, vai pegar o 1o e 2o elemento do carrinho. 

const mockDispatch = jest.fn

// Mock: tornar a biblioteca react redux fake para poder testar se ele está sendo chamado
jest.mock('react-redux', () => {
  return {
   useDispatch: () => {
    return mockDispatch; // mockando uma função / criando uma função fake
    // só quero saber se a função foi chamada ou não. 
  }

}
   // qdo a biblioteca react-redux for chamada no código, retorna um objeto 
   // esse obj vai ter uma propriedade chamada useDispatch, que é um hook(uma função que retorna a var dispatch)

});


describe('Cart > Unit tests', () => {
  it('should render an empty cart correctly', () => {
    render(
         <Cart showCart={true} cart={[]} />)
    // ver se Cart está sendo mostrado ou não. 
    // quero testar se o carrinho está sendo renderizado vazio.

    const titleElement = screen.getByRole('heading', {level: 1});
    const totalElement = screen.getByTestId('total');
    const cartListElement = screen.getByRole('list'); // getByRole('list') = tag ul

    screen.debug(totalElement)
    // esse erro no debug é do eslint, de tipagem (alerta p/ vc não enviar o código p/ produção)
    // vai aparecer um erro no console do test, mas não tem problema. 
 

    //* Verifica se existe o título h1 Carrinho:
    expect(titleElement).toHaveTextContent('Carrinho');

    //* Peguei os elementos do total e testei se ele tem o valor 0 dentro dele. 
    expect(totalElement).toHaveTextContent('$0');

    //* Verificar se a lista dos produtos do cart está vazia:
    expect(cartListElement).toBeEmptyDOMElement();  // verifica se o elemento do dom ul está vazio. 
  });


//* Verificar se está renderizando também qdo passamos os produtos:
it('should render a cart with two products', () => {
  render(<Cart showCart={true} cart={cart} />)

  const productsItemElements = screen.getAllByRole('listitem');  // obtém os itens da lista de produtos (li)
  // getAll retorna um array de elementos HTML. Clicar em cima da tag para ver a especificação do VS Code

  const firstProductTitleElement = screen.getByText(cart[0].title)
  const secondProductTitleElement = screen.getByText(cart[1].title)

  expect(productsItemElements.length).toBe(2); // Espero que o comprimento seja 2 (2 produtos)
  expect(firstProductTitleElement).toBeInTheDocument();
  expect(secondProductTitleElement).toBeInTheDocument()
});


it('should remove product when remove button is clicked', () => {
  render(<Cart showCart={true} cart={[products[0]]}/>) 
  // array que só tem 1 produto do array products

  const removeProductButton = screen.getByRole('button', {name: 'Remover'})

  userEvent.click(removeProductButton)

  expect(mockDispatch).toHaveBeenCalled();  // eu espero que a função mockDispatch seja chamada qdo cliquei no botão
  expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0])); // consigo testar com quais parâmetros a função foi chamada.
  // qdo eu clico no botão de remover, ele tem que dispachar a action removeProduct, passando exatamente os dados do 1o produto...
  // que é o que eu to clicando pra remover.
});
});
import { Product } from "../../data/products";

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

interface CartAction {
  type: string;
  payload: Product
}

export function cartReducer(state = initialState, action: CartAction) {
  switch(action.type)  {
     //* Lógica de adicionar o produto:
    case 'cart/add-product':
      return {
        ...state, // mantém o estado do jeito que estava antes..
        cart: [
          ...state.cart, // .. e coloca um array que tinha tudo o que já tinha antes no carrinho + o que está sendo passado no payload. 
          action.payload, // payload: produto que se deseja adocionar ao carrinho. 
        ]
      };
       //* Lógica de remover o produto:
      case 'cart/remove-product':
        const productToRemove = action.payload
       const cardFiltered = state.cart.filter(product => product.id !== productToRemove.id) 
        //  a ideia é: se o id for diferente, ele retorna pro novo array que ele está criando.
        // os ids precisam ser diferentes do produto que to percorrendo do produto que eu quero remover.
        // se os ids forem diferentes, ele vai colocar no novo array, se for iguais, ele vai filtra, eliminar do array. 
        // e a ideia é pegar o producToRemove e remover, filtrar de dentro do array original (state.card - estado que guarda o carrinho).
        // Agora eu tenho o mesmo carrinho que eu tinha no estado anteriormente, só que filtrando por aquele produto que eu quero remover.  
        
        return {
          ...state,
          cart: cardFiltered,  // é o carrinho após o filtro do produto que eu quero remover.
        };
       default:  
        return state;  // do contrário, retorna o estado que ele está, não faz nada. 
  }


}
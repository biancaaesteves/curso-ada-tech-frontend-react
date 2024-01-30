import { useDispatch} from 'react-redux';
// estou importando de dentro dessa biblioteca, um objeto, cujo a propriedade que eu estou interessada é a propriedade useDispatch
// essa biblioteca está retornando esse objeto com o useDispatch lá dentro. 
import * as S from './styles';
import { removeProduct } from '../../redux/Cart/cart.slice';
import { Product } from '../../data/products';

interface CartProps {
  showCart: boolean;
  cart: Product[]
}

export const Cart: React.FC<CartProps> = ({ 
  showCart, cart }) => {
  const dispatch = useDispatch()

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

    return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductList>
       {cart.map(product => (
        <S.CartProductItem key={product.id}><strong>{product.title}</strong> - ${product.price}
        <button
        onClick={() =>
        dispatch(removeProduct(product))
        }
        >
          Remover
          </button>
        {/* Ao clicar no botão eu chamo a dispatch de remover o produto do carrinho, passando o produto
        que eu quero remover nessa action.  */}
        </S.CartProductItem>
       ))}

      </S.CartProductList>

      <S.CartTotal data-testid="total">Total: ${total}</S.CartTotal>
      {/* data-  : permite pegar atributos.  */}

    </S.Container>
  );
};
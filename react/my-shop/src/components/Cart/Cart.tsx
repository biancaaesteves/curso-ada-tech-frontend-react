import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { RootReducer } from '../../redux/root-reducer';
import { removeProduct } from '../../redux/Cart/cart.slice';

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ 
  showCart }) => {
  // Pegar os dado do carrinho usando desestruturação do objeto:
  const {cart} = useSelector(
   (rootReducer: RootReducer) => rootReducer.cartReducer
  );

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

      <S.CartTotal>Total: ${total}</S.CartTotal>

    </S.Container>
  );
};
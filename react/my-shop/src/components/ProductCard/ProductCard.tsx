import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as S from "./styles";
import { Product } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/Cart/cart.slice";

interface ProductCardProps {
  product: Product;
}

//* Componente Funcional que retorna um HTML com componentes estilizados:

export const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {

  const {cart} = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

  const dispatch = useDispatch()

  //* Variável booleana que informa se o produto está no carrinho:
  // cart é o arra de produtos
  const isProductOnCart = cart.find(productOnCart => product.id === productOnCart.id ) !== undefined;
  // estou pedindo pra ele encontrar um produto cujo ID seja igual ao produto que está no card, sendo exibido no navegador.
  // find: se ele encontrar um produto que respeita essa condição (dá true), ele retorna o produto que ele encontrou.
  // se ele não encontrar nenhum produto que faça essa condição ser true, ele retorna undefined.
  // se o find for !== de undefined, quer dizer que o produto está no carrinho. 
  // do contrário, essa var vai ser false, o que significa que ele não está no carrinho.

function handleAddProductToCart() {
  // despachar a action de adicionar o produto ao carrinho 
dispatch(addProduct(product));  // já passa o payload product direto
}

function handleRemoveProductFromCart() {
  dispatch(removeProduct(product));
}

  return (
    <S.Card>
      <S.ProductImage
        src={product.image}
        alt={product.description}
      />
      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          { Array.from({length: 5}).map((_,index) => 
          index < Math.round(product.rating.rate) ? <AiFillStar key={index}/> : <AiOutlineStar key={index}/>) }
          {/* 
          Índice: 0 - 4 
          Variação: 0 - 5
          Se o índice for menor do que a avaliação, coloca a estrela preenchida.
          Se por um algum motivo for maior ou igual, coloca a estrela vazia (para completar as 5 estrelas). 
          Ex: avaliação: 3.9 (arredondando fica 4). 
          O índice sendo menor que 4 (0, 1, 2 ou 3), coloca estrela preenchida. 
          O índice sendo 4 (4 não é menor do que o 4 que arrendondamos (variação), então a estrela é vazia.)

          */}
          ({ ` ${product.rating.rate}`})
          </S.Review>
        <S.Price>{product.price}</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCartButtonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
          Remover do Carrinho
          <FiShoppingCart />
        </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
          Adicionar ao Carrinho
          <FiShoppingCart />
        </S.AddToCartButton>
        )}
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};

import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as S from "./styles";
import { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

//* Componente Funcional que retorna um HTML com componentes estilizados:

export const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
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
        <S.AddToCartButton>
          Adicionar ao Carrinho
          <FiShoppingCart />
        </S.AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};

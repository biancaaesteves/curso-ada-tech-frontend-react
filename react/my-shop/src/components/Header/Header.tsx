import { useState } from 'react';
import { Cart } from '../Cart/Cart';
import {FiLogIn, FiLogOut, FiShoppingCart} from 'react-icons/fi';

import * as S from "./styles";



/*
importa todos os componentes estilizados que estão dentro do arquivo styles com o prefixo S. Todos os componentes que eu exportar de dentro do arquivo styles vão poder ser utilizados no arquivo Header utilizando o prefixo S
*/

const isLogged = true;

//* Componente Funcional que retorna um HTML com componentes estilizados:
export const Header: React.FC = () => {
  const [ showCart, setShowCart ] = useState(false);

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton  isLogged={isLogged}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
               Carrinho
               <FiShoppingCart/>
               </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

    <Cart showCart={showCart} />
    </S.StyledHeader>
    // Então todo componente estilisado vai ter o S na frente.
  );
};

import { useState } from 'react';
import { Cart } from '../Cart/Cart';
import {FiLogIn, FiLogOut, FiShoppingCart} from 'react-icons/fi';

import * as S from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reduce';



/*
importa todos os componentes estilizados que estão dentro do arquivo styles com o prefixo S. Todos os componentes que eu exportar de dentro do arquivo styles vão poder ser utilizados no arquivo Header utilizando o prefixo S
*/

export const Header: React.FC = () => {
  const {user} = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  const [ showCart, setShowCart ] = useState(false);
  const isLogged = user !== null; // usuário está logado se for diferente de nulo


  function handleUserAuth() {
    if (user === null) { // se não tiver usuário (nulo)
      // usuário não está logado.
    // despachar a action de login:
      dispatch({
        type: 'user/login',  // quero logar o usuário
        payload: {  // objeto com os dados do usuário
         name: 'Bianca Esteves',
         email: 'bianca@email.com',
        }
      })
    } else {
        dispatch({
          type: 'user/logout',
          // não preciso de payload pq só quero fazer o logout. 
          // preciso apenas apagar os dados do usuário.
        })
    }
  }


  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton  isLogged={isLogged} onClick={handleUserAuth}>
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

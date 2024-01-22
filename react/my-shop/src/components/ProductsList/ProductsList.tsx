import { ProductCard } from '../ProductCard/ProductCard';
import {products} from '../../data/products'

import * as S from './styles'

//* Componente Funcional que retorna um HTML com componentes estilizados:

import React from "react";

  export const ProductList: React.FC = () => {
    // Se você preferir, vc pode utilizar um useEffect para puxar esses dados da API de produtos. 

    return (
      // Container que vai agrupar os cards:
      <S.Container>
        {products.map((product) =>(
           <ProductCard key={product.id} product={product}/>
           // renderizando os produtos do array products da API
           // id é único, então posso usar como key do map (chave do map)
        ))}
       
      </S.Container>

    )
  }
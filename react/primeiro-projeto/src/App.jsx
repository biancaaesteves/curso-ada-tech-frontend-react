import React, { useEffect, useState } from "react";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";
import {InfinitySpin} from 'react-loader-spinner';
import axios from 'axios';

import './styles/App.css';

// import { Counter } from "./components/Counter/Counter";



// Um componente em classe é uma classe que herda a classe Component do React
//  e retorna HTML dentro do método render. 

// Componente funcional é uma função que retorna HTML. 

function App() {  // função que retorna html. Tudo que está aqui, aparece no navegador. 
  const [news, setNews] = useState([]);
  /*
  Objetivo desse estado: Assim que o componente montar, vou na API, vou puxar o array de notícias, trazer pra dentro dessa aplicação,
  e jogar dentro do array que criei news. Com o estado, assim que é alterado, a aplicação atualiza, reenderiza.
  */

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
      const newsData = response.data;
      // Response.data pega os dados da requisição. 

      console.log(newsData);
      setNews(newsData) // estou pegando esse array de notícias e jogando diretamente no estado news. 
    }
    
    loadNews();
  }, [])
  /*
  Objetivo do useEffect: quero que a busca na API aconteça assim que o componente montar. 
  Array inicia vazio pq assim que o componente montar, vou na API e buscar os dados utilizando o 
  */
 

    return ( // e é dentro desse método que retornamos o html que será renderizado. 
       <> 

    <Navbar />


    <section id="articles">
      {news.length === 0 ? (
           <div style={{height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <InfinitySpin
             height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
      />
           </div>
      ) : news.map((article) => {
        return (
          <Article
      key={article.id}
      title={article.title}
      provider={article.newsSite}
      description={article.summary}
      thumbnail={article.imageUrl}
      link={article.url}
      /> 
        )
      })}
     {/* Se o tamanho do array de notícias for 0, significa que ele não carregou as notícias ainda, 
     então mostra o loader. Do contrário (puxou as notícias), renderiza as notícias.
      */}
      
    </section> 
     
     </>
     // Como não pode criar mais de 1 tag no render, o react criou essa tag vazia (fragment) para solucionar esse problema. 
   );
 }


export default App;  // está exportando a função App (componentes React)

// App é o 1o componente da nossa aplicação, onde representa a aplicação inteira. 
// Toda a aplicação vai girar em torno do componente App, que vem de aplication. 

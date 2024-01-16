import React from "react";
import './styles/App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import article1Img from "./assets/img/img01.jpg";
import article2Img from "./assets/img/img02.jpg"
import article3Img from "./assets/img/img03.jpeg";
import { Counter } from "./components/Counter/Counter";


// Um componente em classe é uma classe que herda a classe Component do React
//  e retorna HTML dentro do método render. 

// Componente funcional é uma função que retorna HTML. 

class App extends React.Component {  // função que retorna html. Tudo que está aqui, aparece no navegador. 

 render() {  
  // render é o método mais importante de um componente React. 
  // Ele é responsável por renderizar o conteúdo HTML do nosso componente.
  // Todo componente baseado em classes vai ter um método render.

    return ( // e é dentro desse método que retornamos o html que será renderizado. 
       <> 
    <Navbar />

    <section id="articles">
      <Article
      title="Designing Dashboards"
      provider="NASA"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
      thumbnail={article1Img}/> 

      <Article 
      title="Vibrant Portraits of 2020"
      provider="SpaceNews"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
      thumbnail={article2Img}/>

      <Article title="36 Days of Malayalam type"
      provider="Spaceflight Now"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
      thumbnail={article3Img}/>

      <Article
      title="Designing Dashboards"
      provider="NASA"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
      thumbnail={article1Img}/> 

    </section> 
     
     </>
     // Como não pode criar mais de 1 tag no render, o react criou essa tag vazia (fragment) para solucionar esse problema. 
   );
 }
}


export default App;  // está exportando a função App (componentes React)

// App é o 1o componente da nossa aplicação, onde representa a aplicação inteira. 
// Toda a aplicação vai girar em torno do componente App, que vem de aplication. 

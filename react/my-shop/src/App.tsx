import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductsList/ProductsList';



//* Componente Funcional
function App() {
  return (
    <>
    <GlobalStyles />
    <Header />
    <ProductList />
    
    </>
  );
}
export default App;


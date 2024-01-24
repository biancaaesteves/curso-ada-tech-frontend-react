// import React from 'react';
import { Provider } from 'react-redux';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductsList/ProductsList';
import { GlobalStyles } from './styles/GlobalStyles';
import { store } from './redux/store';

//* Componente Funcional

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />

    <GlobalStyles />
    </Provider>

  );
}

export default App;


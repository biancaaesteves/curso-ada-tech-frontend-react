// Agrupa todos os reduces da aplicação 

import { combineReducers } from "redux";
import { userSlice } from "./User/user-slice";
import { cartSlice } from "./Cart/cart.slice";
// combineReducers: serve para combinar todos os reducers dentro de um só (que é o root). 


// Todos os reducers ds aplicação precisam estar esse objeto:
export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,  // userSlice(parâmetro) .reducer(atributo)
  cartReducer: cartSlice.reducer,
});

// Tipagem para consultar sempre que precisar (não precisa decorar):
export type RootReducer = ReturnType<typeof rootReducer>;
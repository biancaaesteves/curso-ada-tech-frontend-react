// Agrupa todos os reduces da aplicação 

import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reducer";
// combineReducers: serve para combinar todos os reducers dentro de um só (que é o root). 

export const rootReducer = combineReducers({
  userReducer,
});

// Tipagem para consultar sempre que precisar (não precisa decorar):
export type RootReducer = ReturnType<typeof rootReducer>;
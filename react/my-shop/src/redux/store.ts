
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
reducer: rootReducer,
// middleware: [logger],
  
});



// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { rootReducer } from "./root-reducer";
// import logger from "redux-logger";

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });





// todos os middlewares serãp adicionados em formato de array. 

//* CÓDIGO DO PROFESSOR :

// import { rootReducer } from "./root-reducer";
// import logger from "redux-logger";
// import { configureStore } from "@reduxjs/toolkit";


// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [logger],
  
// });

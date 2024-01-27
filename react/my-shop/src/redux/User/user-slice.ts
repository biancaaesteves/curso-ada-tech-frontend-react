import { createSlice } from "@reduxjs/toolkit";


interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null // pode ter as informações da interface User (usuário) ou pode ser nulo.
}

//* Estado inicial: assim que aplicação iniciar, quero que o meu estado que guarda os dados do usuário começe com alguma coisa. 
const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {  // reducer é um objeto onde cada método desse objeto vai ser uma função. 
    // colocar os métodos que representam as actions a ser disparadas:
   
    // Primeira action: login
    login: (state, action) => {   
      state.user = action.payload; // sobrescreve o estado
       // vai no campo user e passa o payload pra ele.
    },
    // Segunda action: logout
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const {login, logout} = userSlice.actions;
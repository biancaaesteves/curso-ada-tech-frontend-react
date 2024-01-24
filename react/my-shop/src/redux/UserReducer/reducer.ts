// O final é ts e não jsx pq não é um componente, não vamos utilizar HTML. 

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

// Reducer: guarda o estado que desejamos compartilhar na aplicação e manipula / altera o estado através de uma função. 

interface UserAction {
  type: string;
  payload?: User // opcional
}

// Todo reducer precisa retornar o nosso estado atualizado
export function userReducer(state = initialState, action: UserAction): UserState {
  if (action.type === 'user/login') {
    // se o tipo da ação for user/login, significa que o usuário está logando.
    return {
      // retorna o novo estado atualizado (usuário logado):
      ...state, // esse spred está aqui para pegar tudo o que já tinha antes desse estado.
      user: action.payload as User, // eu preciso dizer qual usuário que está logando. 
      // o payload segue a tipagem de um usuário (User), que tem name e email. 
    }
  } else if (action.type === 'user/logout') {
    return {
      ...state, // vai retornar a mesma coisa que tínhamos antes.
      user: null,  // só que onde tiver o campo user, vai ser nulo (atualiza o nosso usuário pra nulo). Limpa os dados do usuário, que é o que fazemos no logout. 
    }
  }

  return state;
}


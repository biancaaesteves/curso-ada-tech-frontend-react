import { Children, createContext } from "react";  // vm?

const TasksContext = createContext({});

interface TasksProviderProps {
  children: React.ReactNode
}

export const TasksProvider: React.FC<TasksProviderProps> = ({
  children
}) => {
  return (
    // No provider é onde eu exporto tudo que eu quero que seja acessível em toda a aplicação. 
       <TasksContext.Provider value={"Contexto"}>{children}</TasksContext.Provider>
  );
}

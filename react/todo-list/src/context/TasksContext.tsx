import { createContext, useEffect, useState } from "react";  // vm?

export interface Task {
  title: string;
  done: boolean;
  id: number;
}

interface TasksContextData {
  tasks: Task[]  // array de tarefas
  setTasks: React.Dispatch<React.SetStateAction<Task[]>> 
  handleToggleTaskStatus: (taskId: number) =>  void 
  // é uma função, que recebe o taskId, que é um number e retorna void(nada).
}


export const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode
}

export const TasksProvider: React.FC<TasksProviderProps> = ({children}) => {

  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem('tasks')
    if (tasksOnLocalStorage)  {  // se tiver tarefas no localStorage... 
      setTasks(JSON.parse(tasksOnLocalStorage));
    }

  }, [])
    /*
    Assim que o componente for montado em tela, quero ir no localStorage,
     pegar o array de tarefas e jogar dentro do estado testes
    */

     function handleToggleTaskStatus (taskId: number) {
      const newTasks = tasks.map((task) => {
        if (taskId === task.id) {
        // Vou percorrer todas as tarefas
        // se o id da tarefa que eu to recebendo for igual ao id da tarefa que eu to percorrendo agora,
        return {
          ...task, 
          done: !task.done, // faz um toggle no status da tarefa.
        };
      }
      return task;
    })
  
    setTasks(newTasks);
  }
  

  return (
       <TasksContext.Provider value={{
        tasks,
        setTasks,
        handleToggleTaskStatus
       }}>{children}</TasksContext.Provider>
  );
}

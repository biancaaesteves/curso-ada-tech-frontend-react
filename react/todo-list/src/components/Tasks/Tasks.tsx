import styles from "./styles.module.scss";
import { FormEvent, useEffect, useState } from "react";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([] as Task[])
 // estou criando um array como o array de tarefas, que é a interface.  


  // função diaparada qdo o usuário está querendo adicionar uma nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault()
  
    if (taskTitle.length < 3) {
      //se a tarefa tiver menos que 3 letras
      alert('Não é possível adicionar uma tarefa com menos de 3 letras.')
      return;
    } 

  // adiciona a tarefa
    const newTasks = [
      ...tasks, // pega todas as tarefas que já existiam (no array antigo) e coloca nesse novo valor do estado de tarefas.
      {id: new Date().getTime(), title: taskTitle, done: false},
    ];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    // localStorage não guarda array e sim string. Por isso precisamos guardar o array em uma string. 
    setTaskTitle('')
    // vai no estado que guarda o título da tarefa e coloca uma string vazia dentro dela (limpo o input). 
  }

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


  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
        <label htmlFor="task-title">Adicionar Tarefa</label>
        <input
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)} 
        // tenho exatamente o que o usuário está digitando e defino como o valor do título da tarefa e esse valor fica salvo no estado. 
        type="text"
        id="task-title"
        placeholder="Título da Tarefa"
        />
        </div>
       <button type="submit">Adicionar Tarefa</button>   
      </form>

      <ul>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              {/* toda vez que vc faz um map no react p/ renderizar múltiplos elementos através de um array, 
              no 1o elemento que vc está renderizando vc precisa passar uma key, um parâmetro que deve ser único p/ cada elemento que vc está renderizando.  */}
          <input type="checkbox" id={`task-${task.id}`} />
          <label htmlFor={`task-${task.id}`}>{task.title}</label>
        </li>
          )
          /*
          Percorre o array de tarefas (tasks), pra cada  tarefa que tiver nele (task), 
          retorna uma li que é a a tarefa em si, renderiza ela, mostra no HTML. 
           Com o map eu tô mostrando de forma dinâmica as tarefas, e não estática.
          */ 
        })}
      </ul>
    </section>
  )
}
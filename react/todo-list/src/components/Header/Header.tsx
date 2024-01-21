import { useContext } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC =  () => {
  const {tasks} = useContext(TasksContext);


//* Captar tarefas done e pending:

  const totalTasks = tasks.length;
  const totalPending = tasks.reduce((total, task) => {
   if (!task.done) return total + 1 // vai incrementando do total. 
   return total
   // só vai acumular se a tarefa estiver pendente, se não mantém o total anterior. 
  }, 0)

  const totalDone = totalTasks - totalPending;

 return (
  <header className={styles.header}>
    <div className={styles.container}>
    <div>
      <h1>MyTodo</h1>

      <span>Bem-vinda, Bianca!</span>
    </div>

    <div>
      <StatsCard title="Total de Tarefas" value={totalTasks} /> 
      {/* número abre chaves */}
      <StatsCard title="Tarefas Pendentes" value={totalPending} />
      <StatsCard title="Tarefas Concluídas" value={totalDone}/>
    </div>
    </div>
  </header>
 )
}
// o professor prefere usar a arrow function pq conseguimos tipar a var Header como um componente funcional. Fica mais rigoroso com o TypeScript. 
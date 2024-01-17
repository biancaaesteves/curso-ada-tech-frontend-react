import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";

export const Header: React.FC =  () => {

 return (
  <header className={styles.header}>
    <div className={styles.container}>
    <div>
      <h1>MyTodo</h1>

      <span>Bem-vinda, Bianca!</span>
    </div>

    <div>
      <StatsCard title="Total de Tarefas" value={5} /> 
      {/* número abre chaves */}
      <StatsCard title="Tarefas Pendentes" value={4} />
      <StatsCard title="Tarefas Concluídas" value={1}/>
    </div>
    </div>
  </header>
 )
}
// o professor prefere usar a arrow function pq conseguimos tipar a var Header como um componente funcional. Fica mais rigoroso com o TypeScript. 
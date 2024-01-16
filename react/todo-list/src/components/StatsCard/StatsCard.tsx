import styles from "./styles.module.scss";

interface StatsCardProps {  // são as propriedades do meu componente
  title: string;
  value: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({title, value}) => {
  return (
    <article className={styles.stats_card}>
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  )
}
import { useState } from "react";

export const Counter: React.FC = () => {

  const [value, setValue] = useState(0);   // componente que recebe o retorno do useState (estado)

  return (
    <section>
      <h1>{value}</h1>
      {/* Técnica TDD: criar o teste antes de desenvolver a feature.  */}

      <div>
        <button onClick={() => setValue(value - 1)}>Diminuir</button>
        <button onClick={() => setValue(value + 1)}>Aumentar</button>
      </div>
    </section>
  )
}
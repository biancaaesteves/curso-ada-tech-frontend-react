import { useCallback, useMemo, useState } from "react";

interface MemoizationProps {
  financialData: {
    incomes: number[], // valor das receitas  
    outcomes: number[], // valor das despesas
  }
}

export const Memoization: React.FC<MemoizationProps> = ({financialData}) => {
  // React.FC significa que é um componente funcional. 
  // recebe dados financeiros.

  // Estado que define se os valores devem ser mostrados ou não. 
  // Vc quer ou não que apareça o total de receitas e o total de despesas?

  const [showValues, setShowValues] = useState(true);


  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {   // reduce: calcula o total de elementos recebidos. 
      console.log('Calculando o total de receitas.');
      return (total += income);
    }, 0);  // inicia em 0 e a cada interação vou adicionando na var total o valor dentro do array income
  }, [financialData.incomes]);
  
  // O primeiro parâmetro é a função finalcialData, onde o valor que eu quero memorizar é o retorno do reduce.
  // O segundo parâmetro é o array de dependencias, que são as receitas (financialData.incomes).
  // A única dependencia que pode fazer com que esse cálculo mude de valor é se mudar o finalcialData.incomes. 
  // Se esse array não mudar, ou mudar outra coisa, não é para recalcular. 
  // Só vai mudar o total de receitas se o array de receitas mudar.
  

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      console.log('Calculando o total de despesas.');
      return (total += outcome);
    }, 0);  // inicia em 0 e a cada interação vou adicionando na var total o valor dentro do array outcome
  }, [financialData.outcomes]);


  //* Demonstração do useCallback :
 
 const aplicarDesconto = useCallback((desconto: number) => {
  return totalOutcomes * (1 - desconto)
  }, [totalOutcomes]) 
  // essa função só será recriada toda vez que o parâmetro totalOutcomes for atualizado ou qdo o componente for montado pela 1a vez em tela. 

  return (
    <div style={{padding: '2rem'}}>
       <h1>Memoization</h1>

       <h2>useMemo</h2>
       <p>{`Total de Receitas: R$ ${showValues ? totalIncomes : 'XXXXX'}`}</p>
       <br />
       <p>{`Total de Despesas: R$ ${showValues ? totalOutcomes : 'XXXXX'}`}</p>

       <br />
       <br />
       <button onClick={() => setShowValues(!showValues)}>
        { showValues ? 'Ocultar valores' : 'Mostrar valores'}
        </button>
    </div>
  )
}


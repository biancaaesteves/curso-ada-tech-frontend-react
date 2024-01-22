import styled from "styled-components";


// Container que pega todos os cards:
export const Container = styled.main`
  max-width: 1240px;
  margin: 4rem auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap; // quebre o flex (fica responsivo)
  gap: 2rem;

  //*Condicional do SCSS:
  // & = nesse mesmo elemento Container que eu estou estilizando, o que vier em um nível abaixo dele, aplique esse estilo.
  & > * {
    flex: 1 300px; 
    // estique o máximo que vc pode (1), mas no mínimo quero que vc tenha no máximo 300px de largura.
    // se ficar menos de que 300px, tem que quebrar o grid pra linha debaixo. 
  }

  
`
import { FormEvent, useEffect, useRef, useState } from "react"

export const Refs: React.FC = () => {

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  //* ABORDAGEM NÃO CONTROLADA DE PEGAR EVENTOS DO INPUT :
  function handleOnSubmit(event: FormEvent) {  // evento de formulário submetido do ts. 
   event.preventDefault() // evita que a página seja recarregada ao submeter o formulário. 
   console.log(inputNameRef.current?.value);
   console.log(inputEmailRef.current?.value);
   console.log(inputPasswordRef.current?.value);
  }
  
  return (
   <form style={{padding: '2rem'}} onSubmit={(event) => handleOnSubmit(event)}>
    <h1>useRef</h1>
    
    <br />

    <input type="text" placeholder="Nom completo" ref={inputNameRef} />
    <input type="email" placeholder="E-mail" ref={inputEmailRef} />
    <input type="password" placeholder="Senha" ref={inputPasswordRef} />

    <br />
    <button type="submit">Submeter</button>
    </form>
  );
};


import { useEffect, useRef, useState } from "react"

export const Refs: React.FC = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef);

  useEffect(() => {
    console.log(inputRef)
  }, [inputRef])
  // Toda vez que o inputRef mudar, dá um console.log pra ver o que tem dentro dele.

  function handleClickOnButton() {
   inputRef.current.focus()
  }
  
  return (
   <div style={{padding: '2rem'}}>
    <h1>useRef</h1>
    
    <br />

    <input type="text" placeholder="Nom completo" ref={inputRef} />

    <br />
    <button onClick={handleClickOnButton}>Clique Aqui</button>


   {/* ao clicar no botão, eu atualizo o estado e espalho uma re-renderização. */}
    </div>
  );
};
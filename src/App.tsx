import { useState } from 'react';
import React from 'react';
import useStateWithValidation from './hooks/stateWithValidation';

function App() {
  const validacaoValor = (novoValor: number | (() => number)) => {
    return novoValor.toString().length <= 8;
  }

  const [valor, setValor] = useStateWithValidation<number>(0, validacaoValor);

  const adicionar = () => {
    setValor(valor + 1);
    //setValor(prev => prev + 1);
  };
  const subtrair = () => {
    setValor(valor - 1);
    //setValor(prev => prev - 1);
  };
  const resetar = () => {
    setValor(0);
  };

  let botaoReset = null;

  if (valor !== 0) {
    botaoReset = (
      <button className="botao botao-resetar" onClick={resetar}></button>
    );
  }

  const lookupClassesDisplay: TIndexable = {
    4: 'text-6xl text-gray-100',
    5: 'text-5xl text-gray-100',
    6: 'text-4xl text-gray-100',
    7: 'text-3xl text-gray-100',
    8: 'text-2xl text-gray-100',
  }

  const larguraValor = valor.toString().length;

  type TIndexable = {
    [key: string]: any;
  }


  const classeDisplay = lookupClassesDisplay[larguraValor] || 'text-7xl text-gray-100';
  
  return (
    <div className="fundo">
      <div className="contador">
        <div className={classeDisplay}>{valor}</div>
        <div className="botoes">
          <button className="botao botao-subtrair" onClick={subtrair}></button>
          {botaoReset}
          <button
            className="botao botao-adicionar"
            onClick={adicionar}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;

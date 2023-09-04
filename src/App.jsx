import './App.css'
import { useState, useRef, useEffect } from 'react';

function App() {

  const nome = "pedro"
  let [nomeDigitado, setNomeDigitado] = useState('');

  const inputRef = useRef([]);
  const inputs = nome.split('');

  useEffect(() => {
    setNomeDigitado('');
    inputRef.current[0].focus();
  }, [])

  const nextInput = (e, index) => {
    if (e.key === 'Backspace') {
      if (index > 0 && e.target.value.length === 0) {
        inputRef.current[index - 1].focus();
      }
      setNomeDigitado(nomeDigitado.slice(0, -1));
      return;
    }
    setNomeDigitado(nomeDigitado + e.key);
    if (index < inputs.length - 1 && e.target.value.length === 1) {
      inputRef.current[index + 1].focus();
      ganhou();
      return;
    }
  }

  const ganhou = () => {
    console.log(nomeDigitado)
    if (nomeDigitado === nome) {
      alert('Você ganhou!');
    }
  }

  return (
    <>
      <div className='flex items-center justify-center w-full mt-20 space-x-4'>
        {inputs.map((input, index) => (
          <input type="text"
            maxLength="1"
            key={index}
            ref={input => { inputRef.current[index] = input }}
            onKeyDown={e => nextInput(e, index)}
            className='h-20 w-20 rounded-md border-0 text-gray-900 ring-1 ring-inset 
          ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
          text-center text-4xl' />
        ))}
      </div>
    </>
  )
}

export default App

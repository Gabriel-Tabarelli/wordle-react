import { useEffect, useRef, useState } from 'react'
import './App.css'

const App = () => {

  const [palavra, setPalavra] = useState('');
  const inputs = useRef([]);

  const keysAllowed = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  useEffect(() => {
    setPalavra('teste');
  }, []);

  useEffect(() => {
    keysAllowed.push('Backspace');
    keysAllowed.push('Enter');
  }, [palavra]);

  const veryfyWord = () => {
    const word = inputs.current.map((input) => input.value).join('');
    if (word.length !== palavra.length) return;
    if (word === palavra) alert('Parabéns você acertou a palavra!');
  }

  const handlerChange = (e, index) => {
    if (!keysAllowed.includes(e.key)) return;
    if (e.key === 'Enter') {
      veryfyWord()
      return;
    };

    const { value } = e.target;
    const currentInput = inputs.current[index];

    if (value.length !== 0) {
      const nextInput = inputs.current[index + 1];
      nextInput?.focus();
      if (currentInput?.getAttribute('data-custom') !== 'atribuido')
        currentInput?.setAttribute('data-custom', 'atribuido');
      else if (nextInput) {
        nextInput.value = e.key;
        nextInput.setAttribute('data-custom', 'atribuido');
      }
    }
    
    if (value.length === 0) {
      inputs.current[index - 1]?.focus();
      currentInput.setAttribute('data-custom', '');
    }
  }

  return (
    <>
      <div className='flex items-center justify-center w-full mt-20 space-x-4'>
        {palavra.split('').map((_, index) => (
          <input 
            type="text"
            maxLength="1"
            ref={(el) => inputs.current[index] = el}
            key={index}
            data-custom={''}
            onKeyUp={(e) => handlerChange(e, index)}
            className='h-20 w-20 rounded-md border-0 text-gray-900 ring-1 ring-inset 
          ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
          text-center text-4xl' />
        ))}
      </div>
    </>
  )
}

export default App

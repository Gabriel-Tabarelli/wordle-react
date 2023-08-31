import './App.css'
import { useState, useRef, useEffect } from 'react';

function App() {

  const nome = "pedro"

  const inputRef = useRef([]);
  const inputs = Array(6).fill(0);

  useEffect(() => {
    
  }, [])

  const nextInput = (e, index) => {
    if (e.target.value.length >= 1) {
      if (index < inputs.length - 1) {
        inputRef.current[index + 1].focus();
      }
    }
  }

  return (
    <>
      <div className='flex items-center justify-center w-full mt-20 space-x-4'>
        {inputs.map((input, index) => (
        <input type="text"
          maxLength="1"
          ref={inputRef[index]}
          onChange={e => nextInput(e, index)}
          className='h-20 w-20 rounded-md border-0 text-gray-900 ring-1 ring-inset 
          ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
          text-center text-4xl' />
        ))}
      </div>
    </>
  )
}

export default App

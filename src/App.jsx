import { useEffect, useRef, useState } from 'react'
import './App.css'

const App = () => {

  const [palavra, setPalavra] = useState('');
  const inputs = useRef([]);
    
  useEffect(() => {
    setPalavra('teste');
  }, []);

  const handlerChange = (e, index) => {
    console.log(e.target.value);
    const { value } = e.target;
    if (value.length !== 0) {
      console.log('a')
    }
  }

  return (
    <>
      <div className='flex items-center justify-center w-full mt-20 space-x-4'>
        {palavra.split('').map((input, index) => (
          <input 
            type="text"
            maxLength="1"
            ref={el => inputs.current[index] = el}
            key={index}
            onKeyDown={(e) => handlerChange(e, index)}
            className='h-20 w-20 rounded-md border-0 text-gray-900 ring-1 ring-inset 
          ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
          text-center text-4xl' />
        ))}
      </div>
    </>
  )
}

export default App

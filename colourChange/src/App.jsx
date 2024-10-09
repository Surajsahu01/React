import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgcolour, setBgcolour] = useState('Brown')

  return (
    <div className='w-[100%] h-screen duration-200'
    style={{backgroundColor: bgcolour}}>

  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 

    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

      <button onClick={() => setBgcolour("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700'>Red</button>

      <button onClick={() => setBgcolour("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700'>Green</button>

      <button onClick={() => setBgcolour("blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700'>Blue</button>

      <button onClick={() => setBgcolour("olive")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-lime-700'>olive</button>

      <button onClick={() => setBgcolour("gray")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-400'>Gray</button>

      <button onClick={() => setBgcolour("yellow")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-400'>Yellow</button>

      <button onClick={() => setBgcolour("pink")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-300'>Pink</button>

      <button onClick={() => setBgcolour("purple")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-fuchsia-700'>Purple</button>

      <button onClick={() => setBgcolour("lavender")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-slate-300'>Lavender</button>

      <button onClick={() => setBgcolour("white")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white'>white</button>
        
      <button onClick={() => setBgcolour("black")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black'>black</button>

  </div>  
</div>
</div>
  )
}

export default App

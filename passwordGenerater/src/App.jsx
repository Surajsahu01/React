import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const[length, setLeangth] =  useState(6)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")


  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~'"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  const copyPassword = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])

 
  const handelclicl = () => {
    window.location.reload();
  }
  

  return (
    <div className="w-full max-w-[35%] mx-auto shadow-md rounded-lg px-4 py-2 pb-5 m-60 bg-gray-800 text-orange-500"
    onClick={handelclicl}>
      <h1 className='text-white text-center my-3 text-2xl'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type='text'
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            value={password}
            readOnly
            ref={passwordRef}
        />
        <button 
        onClick={copyPassword}

        className='outline-none bg-blue-700 text-white py-0.5 px-3 hover:shadow-lg hover:bg-blue-500 shrink-0 hover:duration-200 '>Copy</button>
        
    </div>
    <div className='flex text-lg gap-x-4'>
      <div className='flex items-center gap-x-1 '>
        <input 
        type='range'
        min={6}
        max={100}
        className='cursor-pointer'
        value={length}
        onChange={(e) => {setLeangth(e.target.value)}}/>
        <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
      />
      <label>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input
           type='checkbox'
           defaultChecked={charAllowed} 
           onChange={() => {
            setCharAllowed((prev) => !prev)
           }} 
          />
          <label>Characters</label>
      </div>
    </div>
</div>
  )
}

export default App

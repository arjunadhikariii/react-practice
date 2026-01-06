import { useState } from 'react'

import './App.css'


function App() {
const [color, setColor] = useState("green")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap  justify-center inset-x-0 px-2 bottom-12'>
        <div className='flex flex-wrap justify-center gap-4 bg-white px-4 py-2 rounded-3xl  '>
          <button
           onClick={() => setColor("red")}
          className='outline-none text-white px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "red"}
          }>Red</button>
        </div>
        <div className='flex flex-wrap justify-center bg-white px-4 py-2 rounded-3xl  '>
          <button
          onClick={() => setColor("green")}
          className='outline-none text-white px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "green"}}>Green</button>
        </div>
        <div className='flex flex-wrap justify-center bg-white px-4 py-2 rounded-3xl  '>
          <button
                     onClick={() => setColor("blue")}

          className='outline-none text-white px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "blue"}}>Blue</button>
        </div>
        <div className='flex flex-wrap justify-center bg-white px-4 py-2 rounded-3xl  '>
          <button
                     onClick={() => setColor("orange")}

          className='outline-none text-white px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "orange"}}>Orange</button>
        </div>
      </div>

    </div>
     
    </>
  )
}

export default App;

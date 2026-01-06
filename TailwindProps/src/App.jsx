import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-5 rounded-2xl' >Tailwindcss</h1>
    <Card  userName = "Arjun" buttonTxt = "Click Me " description='I am a computer Engineer'/>
    <Card userName = "God" buttonTxt = "Verify Me" />
    <Card />
    </>
  )
}

export default App

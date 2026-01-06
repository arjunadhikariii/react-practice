import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    let [count,setCount] = useState(10)
    
    const addcount = () => {
      // count === 20 ? alert("Count is full") : setCount(count+1)

      if (count === 20) {
        alert("count is full")
      }
      else{
           setCount(previouscount =>   previouscount+1);
           setCount(previouscount =>   previouscount+1);
           setCount(previouscount =>   previouscount+1);

      }

    }
    const removecount= () => {
     count === 0 ? alert("Count can not be less than 0") : setCount(count-1)
    }



  return (

    

    <>
      <div>
        <h3>Counter: {count}</h3>

        <button onClick={addcount}>addCount: {count}</button>
    <br />

        <button onClick={removecount}>removeCount: {count}</button>
      </div>
        
    
    </>
  )
}

export default App;

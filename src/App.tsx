import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dog, setDog] = useState("")
  
  function setMyCount() {
    setCount(count+1);
  }

  return (
    <>
      <div>
          <img src="https://a0.muscache.com/im/pictures/ca0c83b6-313a-423d-b610-9abbaaae503b.jpg?ml=true%3Faki_policy%3Dlarge&im_w=960" alt="Pretty little holiday lake house in Trevignano Romano, Italy" />
      </div>
      <h1>Pretty Little Lake House</h1>
      <div className="card">
        <button onClick={setMyCount}>
          count is {count}
        </button>
        <p>My dog is: {dog} </p>
        <button onClick={() => setDog("Claudia")}>show dog name</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

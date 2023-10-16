import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  // Usually defining event handlers within JSX-templates is not a good idea.
  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <div>
        <div>{counter}</div>
        <button onClick={increaseByOne}>
            plus
        </button>
        <button onClick={setToZero}> 
            zero
      </button>
    </div>
    
  )
}

export default App
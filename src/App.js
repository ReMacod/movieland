import './App.css'
import { useState, useEffect } from 'react'

//state and effect
const App = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setCounter(100)
  }, [])

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter} </h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  )
}

//////////////////////////////////////////////////////////////////////////
//props
/*
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <h1>Hello </h1>
      <Person name={'John'} lastName={'Novak'} age={25} />
      <Person name={'Edo'} lastName={'Jese'} age={35} />
      <Person name={'Tilen'} lastName={'ReactJs'} age={23} />
      <Person name={'Igor'} lastName={'Srdoc'} age={38} />
    </div>
  )
}
*/
///////////////////////////////////////////////////////////////////////

/*
const App = () => {
  const name = 'Marko'
  const isNameVisible = false
  return (
    <div className="App">
      <h1>Hello {isNameVisible ? name : 'amm ime ni vidno :( '}</h1>
    </div>
  )
}
 
*/

//sample ternary expression
/*
const App = () => {
  const name = 'Marko'

  return (
    <div className="App">
      <h1>Hello </h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>Test</h1>
          <h2>There is no name</h2>
        </>
      )}
    </div>
  )
}

*/

export default App

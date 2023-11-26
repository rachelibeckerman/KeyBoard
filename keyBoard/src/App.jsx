import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Letters from './Letters/Letters'
import Language from './Language/Language'
import SpecialButtons from './SpecialButtons/SpecialButtons'
function App() {
  const [enteredBody, setEnteredBody] = useState('');
  const [RequestedArray, setRequestedArray] = useState("EnglishLC")

//let st = "gfghas~{'\n'}dsdds"

  return (
    <>
    {/* <p>{st}</p> */}
      <p>{enteredBody}</p>
      <Letters state={enteredBody} setState={setEnteredBody} requestedArray={RequestedArray} />
      <Language state={RequestedArray} setState={setRequestedArray} />
      <SpecialButtons state={enteredBody} setState={setEnteredBody} />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Letters from './Letters/Letters'
import Language from './Language/Language'
import SpecialButtons from './SpecialButtons/SpecialButtons'
import DisplayBody from './DisplayBody/DisplayBody'
import Style from './Style/Style'

function App() {
  const [enteredBody, setEnteredBody] = useState([]);
  const [RequestedArray, setRequestedArray] = useState("EnglishLC")
  const [myStyle , setStyle] = useState({color:'black',size:'1em',font:'inherit'})

  
  return (
    <>
      <p><DisplayBody state = {enteredBody}/></p>
      <Letters state={enteredBody} setState={setEnteredBody} requestedArray={RequestedArray} Mstyle = {myStyle} />
      <Language state={RequestedArray} setState={setRequestedArray} />
      <SpecialButtons state={enteredBody} setState={setEnteredBody} />
      <Style state={myStyle} setState={setStyle} />
    </>
  )
}

export default App

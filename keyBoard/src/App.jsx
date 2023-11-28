import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Letters from './Letters/Letters'
import Language from './Language/Language'
import SpecialButtons from './SpecialButtons/SpecialButtons'
import DisplayBody from './DisplayBody/DisplayBody'
import Style from './Style/Style'
import ChangeAllStyle from './ChangeAllStyle/ChangeAllStyle'
import Undo from './Undo/Undo'
function App() {
  let undoArray = []
  const [enteredBody, setEnteredBody] = useState([]);
  const [RequestedArray, setRequestedArray] = useState("EnglishLC")
  const [myStyle , setStyle] = useState({color:'black',size:17,font:'inherit'})

  
  return (
    <>
      <p ><DisplayBody state = {enteredBody}/></p>
      <Letters state={enteredBody} setState={setEnteredBody} requestedArray={RequestedArray} Mstyle = {myStyle} Undo={undoArray}/>
      <SpecialButtons state={enteredBody} setState={setEnteredBody} />
      <Undo state={enteredBody} setState={setEnteredBody} setStyle = {setStyle} Undo={undoArray}/><br/>
      <Language state={RequestedArray} setState={setRequestedArray} /><br/>
      <Style state={myStyle} setState={setStyle} Undo={undoArray}/><br />
      <ChangeAllStyle state={enteredBody} setState={setEnteredBody} setStyle = {setStyle} />
      
    </>
  )
}

export default App

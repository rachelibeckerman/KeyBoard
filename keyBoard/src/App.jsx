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
  const [undoArray, setundoArray] = useState([]);
  const [enteredBody, setEnteredBody] = useState([]);
  const [RequestedArray, setRequestedArray] = useState("EnglishLC")
  const [myStyle , setStyle] = useState({color:'black',size:17,font:'inherit'})
console.log(undoArray)
  
  return (
    <>
      <p ><DisplayBody state = {enteredBody}/></p>
      <Letters state={enteredBody} setState={setEnteredBody} requestedArray={RequestedArray} Mstyle = {myStyle} Undo={undoArray} setUndo={setundoArray}/>
      <SpecialButtons state={enteredBody} setState={setEnteredBody} Undo={undoArray} setUndo={setundoArray} />
      <Undo state={enteredBody} setState={setEnteredBody} setStyle = {setStyle} Undo={undoArray} setUndo={setundoArray}/><br/>
      <h3>Language</h3>
      <Language state={RequestedArray} setState={setRequestedArray} /><br/>
      <h3>style</h3>
      <Style state={myStyle} setState={setStyle} Undo={undoArray} setUndo={setundoArray}/><br />
      <h3>General changes</h3>
      <ChangeAllStyle state={enteredBody} setState={setEnteredBody} setStyle = {setStyle} Undo={undoArray} setUndo={setundoArray}/>
      
    </>
  )
}

export default App

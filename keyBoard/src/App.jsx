import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Letter from './Letter/Letter'

function App() {

  const [enteredBody,setEnteredBody] = useState('');

  function changeBodyHandler(val){
    setEnteredBody(enteredBody + val);
  }
    const LanguageArr = ['EnglishLetters','HebrewLetters'];
     const EnglisHupperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
    const EnglishLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
    const HebrewLetters = ['ק','ר','א','ט','ו','ן','ם','פ','ש','ד','ג','כ','ע','י','ח','ל','ך','ף','ז','ס','ב','ה','נ','מ','צ','ת','ץ']
   const [RequestedArray,setRequestedArray]= useState(EnglishLetters) ;

 function changeArray(val){
  setRequestedArray(val);
 }
      // const ButtonsLanguage = LanguageArr.map((arr,i)=>
      
       const ButtonsLetters = RequestedArray.map((letter,i)=>
       <Letter key = {i} value = {letter} onBodyChange = {changeBodyHandler} />)

  return (
    <>
        <p>{enteredBody}</p>
        {ButtonsLetters}
        {/* {ButtonsLanguage} */}
        <Letter value = {RequestedArray} onBodyChange = {changeArray} />
    </>
  )
  }

export default App

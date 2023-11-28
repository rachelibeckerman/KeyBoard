import React, { useState } from 'react';

function Letters(props) {

   function onBodyChange(val) {
      props.Undo.push(props.state)
      props.setState(cur => [...cur, { value: val, style: props.Mstyle }]);
   }

   const EnglishUpperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
   const EnglishLowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
   const HebrewLetters = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ']
   const Emojis = ['😀', '😉', '😊', '😋', '😍', '🥰', '😘', '😗', '🤣', '😂', '🤗', '🤔', '😛','😎', '🙂', '😕', '🙃', '😝', '💖', '💕', '❤', '👏', '✌', '👍', '👎','🎈','🎀']
   const Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '&', '*', '(', ')', '?', '/', '.', ',']

   let RequestedArray = EnglishLowerCase;

   switch (props.requestedArray) {
      case "EnglishLC": RequestedArray = EnglishLowerCase;
         break;
      case "EnglishUC": RequestedArray = EnglishUpperCase;
         break;
      case "Hebrew": RequestedArray = HebrewLetters;
         break;
      case "Emojis": RequestedArray = Emojis;
         break;
      case "Numbers": RequestedArray = Numbers;
         break;
   }

   const ButtonsLetters = RequestedArray.map((letter, i) => <>
      <button key={i} className={letter} onClick={() => onBodyChange(letter)}>{letter}</button>
         {(letter =='p' || letter == 'l' || letter == 'm'||
         letter =='פ' || letter == 'ף' || letter == 'ץ'||
         letter =='P' || letter == 'L' || letter == 'M'||
         letter =='9' || letter == ',' || letter == '😂'||
         letter =='💖' || letter == '🎀') ? <br/> :<></>}
   </>)

   return (
      <>
         {ButtonsLetters}
      </>
   );
}

export default Letters
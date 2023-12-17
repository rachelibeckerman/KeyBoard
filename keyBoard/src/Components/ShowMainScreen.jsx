import React, { useState } from 'react';
import Letters from './Letters'
import Language from './Language'
import SpecialButtons from './SpecialButtons'
import DisplayBody from './DisplayBody'
import Style from './Style'
import ChangeAllStyle from './ChangeAllStyle'
import Undo from './Undo'
import img from '../img/Asset 2@4x.png'

function ShowMainScreen() {
    const [undoArray, setundoArray] = useState([]);
    const [enteredBody, setEnteredBody] = useState([]);
    const [RequestedArray, setRequestedArray] = useState("EnglishLC")
    const [myStyle, setStyle] = useState({ color: 'black', size: 17, font: 'inherit' })

    return (
        <>
            <img src={img} style={{ width: '150px', hight: '70px' }}/>
            <h5>!ביחד ננצח</h5>
            <p className='text'><DisplayBody enteredBodyState={enteredBody} /></p>
            <Letters enteredBodyState={enteredBody} enteredBodySetState={setEnteredBody} requestedArray={RequestedArray} Mstyle={myStyle} setUndo={setundoArray} />
            <SpecialButtons enteredBodyState={enteredBody} enteredBodySetState={setEnteredBody} setUndo={setundoArray} />
            <Undo enteredBodySetState={setEnteredBody} setStyle={setStyle} Undo={undoArray} /><br />
            <h3>Language</h3>
            <Language setRequestedArray={setRequestedArray} /><br />
            <h3>style</h3>
            <Style Mstyle={myStyle} setStyle={setStyle} /><br />
            <h3>General changes</h3>
            <ChangeAllStyle enteredBodyState={enteredBody} enteredBodySetState={setEnteredBody} setStyle={setStyle} Undo={undoArray} setUndo={setundoArray} />

        </>)
}


export default ShowMainScreen;
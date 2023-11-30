import React, { useState } from 'react';
import Letters from '../Letters/Letters'
import Language from '../Language/Language'
import SpecialButtons from '../SpecialButtons/SpecialButtons'
import DisplayBody from '../DisplayBody/DisplayBody'
import Style from '../Style/Style'
import ChangeAllStyle from '../ChangeAllStyle/ChangeAllStyle'
import Undo from '../Undo/Undo'

function ShowMainScreen() {
    const [undoArray, setundoArray] = useState([]);
    const [enteredBody, setEnteredBody] = useState([]);
    const [RequestedArray, setRequestedArray] = useState("EnglishLC")
    const [myStyle, setStyle] = useState({ color: 'black', size: 17, font: 'inherit' })

    return (
        <>
            <p className='text'><DisplayBody enteredBodyState={enteredBody} /></p>
            <Letters  enteredBodyState={enteredBody} enteredBodySetState={setEnteredBody} requestedArray={RequestedArray} Mstyle={myStyle} setUndo={setundoArray} />
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
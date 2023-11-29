import React, { useState } from "react";


function Undo(props) {

    function onUndo() {

        let lastAction = props.Undo.pop()
        if (lastAction != undefined) {
            props.setState(lastAction);
            props.setStyle(lastAction[lastAction.length - 1].style)
        }
    }
    const createUndoButton = <button onClick={() => onUndo()}>Undo</button>
    return (
        <>
            {createUndoButton}
        </>
    );
}


export default Undo;
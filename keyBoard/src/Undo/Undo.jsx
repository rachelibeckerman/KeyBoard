import React,{useState} from "react";


function Undo(props){
    function onUndo(){

    }
    const createUndoButton = <button  onClick={() => onUndo()}>Undo</button>
    return(
    <>
    {createUndoButton}
    </>
    );
}


export default Undo;
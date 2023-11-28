import React,{useState} from "react";


function Undo(props){
    
    function onUndo(){
        let lastAction = props.Undo.pop()
       props.setState(lastAction) ;
      props.setStyle(lastAction.setStyle) 
    }
    const createUndoButton = <button  onClick={() => onUndo()}>Undo</button>
    return(
    <>
    {createUndoButton}
    </>
    );
}


export default Undo;
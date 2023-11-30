import React, { useState } from "react";

function SpecialButtons(props) {
    const specialButtons = ['Enter', 'Space', 'Delete'];

    function onChange(val) {
        switch (val) {
            case "Enter": props.enteredBodySetState(cur => [...cur, { value: <br />, style: {} }]);
                break;
            case "Space": props.enteredBodySetState(cur => [...cur, { value: " ", style: {} }]);
                break;
            case "Delete": props.setUndo(cur => [...cur, props.enteredBodyState])
                props.enteredBodySetState(props.enteredBodyState.slice(0, -1));
                break;
        }
    }

    const createSpecialButtons = specialButtons.map((sBtn, i) =>
        <button key={i} className={sBtn} onClick={() => onChange(sBtn)}>{sBtn}</button>)

    return (
        <>
            {createSpecialButtons}
        </>
    );
}

export default SpecialButtons;
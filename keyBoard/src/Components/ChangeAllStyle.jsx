import React, { useState } from "react";


function ChangeAllStyle(props) {

    const specialButtons = ['Delete All', 'Upper All', 'Lower All'];

    function onChange(val) {
        let i = props.Undo;
        props.setUndo(cur => [...cur, props.enteredBodyState]);
        switch (val) {
            case "Delete All":
                props.enteredBodySetState([]);
                props.setStyle({ color: 'black', size: 17, font: 'inherit' })
                break;
            case "Upper All":
                props.enteredBodySetState([])
                props.enteredBodyState.map(element => {
                    (element.value >= 'a' & element.value <= 'z') ?
                    props.enteredBodySetState(cur => [...cur, { value: element.value.toUpperCase(), style: element.style }]) :
                    props.enteredBodySetState(cur => [...cur, element])
                });
                break;
            case "Lower All":
                props.enteredBodySetState([])
                props.enteredBodyState.map(element => {
                    (element.value >= 'A' & element.value <= 'Z') ?
                    props.enteredBodySetState(cur => [...cur, { value: element.value.toLowerCase(), style: element.style }]) :
                    props.enteredBodySetState(cur => [...cur, element])
                });
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

export default ChangeAllStyle;
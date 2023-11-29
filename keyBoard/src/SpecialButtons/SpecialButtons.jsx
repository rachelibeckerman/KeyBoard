import React, { useState } from "react";

function SpecialButtons(props) {
    const specialButtons = ['Enter', 'Space', 'Delete'];

    function onChange(val) {
        switch (val) {
            case "Enter": props.setState(cur => [...cur, { value: <br />, style: {} }]);
                break;
            case "Space": props.setState(cur => [...cur, { value: " ", style: {} }]);
                break;
            case "Delete": props.setUndo(cur => [...cur, props.state])
                props.setState(props.state.slice(0, -1));
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
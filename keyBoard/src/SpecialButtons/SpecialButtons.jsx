import React, { useState } from "react";

function SpecialButtons(props) {
    const specialButtons = ['Enter', 'Space', 'Delete'];

    function onChange(val) {
        switch (val) {
            case "Enter": props.setState(props.state + '\n');
                break;
            case "Space": props.setState(props.state + ' ');
                break;
            case "Delete": props.setState(props.state.slice(0, -1));
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
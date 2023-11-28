import React, { useState } from "react";



function ChangeAllStyle(props) {

    const specialButtons = ['Delete All', 'Upper All', 'Lower All'];

    function onChange(val) {
        switch (val) {
            case "Delete All": props.setState([]);
                props.setStyle({ color: 'black', size: 17, font: 'inherit' })
                break;
            case "Upper All": props.state.map(element => { element.value = element.value.toUpperCase(), element.style = element.style });
                props.setState(cur => [...cur, { value: "", style: {} }]);
                break;
            case "Lower All": props.state.map(element => { element.value = element.value.toLowerCase(), element.style = element.style });
                props.setState(cur => [...cur, { value: "", style: {} }]);
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
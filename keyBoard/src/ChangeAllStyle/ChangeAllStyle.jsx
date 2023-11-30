import React, { useState } from "react";



function ChangeAllStyle(props) {

    const specialButtons = ['Delete All', 'Upper All', 'Lower All'];

    function onChange(val) {
        let i = props.Undo;
        props.setUndo(cur => [...cur, props.state]);
        switch (val) {
            case "Delete All":
                props.setState([]);
                props.setStyle({ color: 'black', size: 17, font: 'inherit' })
                break;
            case "Upper All":
                //props.state.map(element => { element.value = element.value.toUpperCase(), element.style = element.style });
                props.setState([])
                props.state.map(element => {(element.value>='a'&element.value<='z')? props.setState(cur => [...cur, { value: element.value.toUpperCase(), style: element.style }]):props.setState(cur=>[...cur,element] )});
                
                //props.setState(cur => [...cur, { value: "", style: {} }]);
                break;
            case "Lower All":
                props.setState([])
                props.state.map(element => { props.setState(cur=>[...cur,{value : element.value.toLowerCase(), style : element.style}]) });
                // props.state.map(element => { element.value = element.value.toLowerCase(), element.style = element.style });
                // props.setState(cur => [...cur, { value: "", style: {} }]);
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
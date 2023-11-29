import React, { useState } from "react";

function Style(props) {
    const colors = ['red', 'black', 'blue', 'pink'];
    const sizes = ['Larger', 'smaller'];
    const font = ['cursive', 'inherit', 'fantasy',];

    function onChangeColor(val) {
        //props.setUndo(cur => [...cur,props.state])
        props.setState({ color: val, size: props.state.size, font: props.state.font });
    }

    function onChangeSize(val) {
        if (val == 'Larger')
            props.setState({ color: props.state.color, size: props.state.size + 1, font: props.state.font });
        else if (props.state.size > 10)
            props.setState({ color: props.state.color, size: props.state.size - 1, font: props.state.font });
    }

    function onChangeFont(val) {
        props.setState({ color: props.state.color, size: props.state.size, font:val });
    }

    const createColorsButtons = colors.map((sBtn, i) =>
        <button style={{ color: sBtn }} key={i} className={sBtn} onClick={() => onChangeColor(sBtn)}>{sBtn}</button>)

    const createSizesButtons = sizes.map((sBtn, i) =>
        <button key={i} className={sBtn} onClick={() => onChangeSize(sBtn)}>{sBtn}</button>)

    const createFontsButtons = font.map((sBtn, i) =>
    <button style={{fontFamily:sBtn}} key={i} className={sBtn} onClick={() => onChangeFont(sBtn)}>{sBtn}</button>)
    return (
        <>
            {createColorsButtons}
            {createSizesButtons}
            {createFontsButtons}
        </>
    );
}

export default Style;
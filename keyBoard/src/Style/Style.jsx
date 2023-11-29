import React, { useState } from "react";
import { ChromePicker } from "react-color";

//import { onClickOutside } from '@vueuse/core'
//import { ColorPicker} from "./ColorPicker";

function Style(props) {
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    // const colors = ['red', 'black', 'blue', 'pink'];
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
        props.setState({ color: props.state.color, size: props.state.size, font: val });
    }

    // const createColorsButtons = colors.map((sBtn, i) =>
    //     <button style={{ color: sBtn }} key={i} className={sBtn} onClick={() => onChangeColor(sBtn)}>{sBtn}</button>)

    function createColorsButton(){
        return (
            colorPickerVisible ? (
            <>
                <ChromePicker className="colorPicker"
                    color={props.state.color}
                    onChange={(color) => onChangeColor(color.hex)}
                />
                <button onClick={() => setColorPickerVisible(false)}>Close the color map</button>
            </>
            ) : (
            <button onClick={() => setColorPickerVisible(true)}>Choose a color</button>
            )
        )
    }

    const createSizesButtons = sizes.map((sBtn, i) =>
        <button key={i} className={sBtn} onClick={() => onChangeSize(sBtn)}>{sBtn}</button>)

    const createFontsButtons = font.map((sBtn, i) =>
        <button style={{ fontFamily: sBtn }} key={i} className={sBtn} onClick={() => onChangeFont(sBtn)}>{sBtn}</button>)


    return (
        <>
            <h5>color</h5>
            {createColorsButton()}
            <br />
            <h5>size</h5>
            {createSizesButtons}
            <br />
            <h5>font</h5>
            {createFontsButtons}
        </>
    );
}

export default Style;
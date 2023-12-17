import React, { useState } from "react";
import { ChromePicker } from "react-color";

function Style(props) {
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    const sizes = ['Larger', 'smaller'];
    const font = ['cursive', 'inherit', 'fantasy',];

    function onChangeColor(val) {
        props.setStyle({ color: val, size: props.Mstyle.size, font: props.Mstyle.font });
    }

    function onChangeSize(val) {
        if (val == 'Larger')
            props.setStyle({ color: props.Mstyle.color, size: props.Mstyle.size + 1, font: props.Mstyle.font });
        else if (props.Mstyle.size > 10)
            props.setStyle({ color: props.Mstyle.color, size: props.Mstyle.size - 1, font: props.Mstyle.font });
    }

    function onChangeFont(val) {
        props.setStyle({ color: props.Mstyle.color, size: props.Mstyle.size, font: val });
    }

    function createColorsButton() {
        return (
            colorPickerVisible ? (
                <>
                    <ChromePicker className="colorPicker"
                        color={props.Mstyle.color}
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
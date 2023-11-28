import React, { useState } from "react";

function Style(props) {
    const colors = ['red', 'black', 'blue', 'pink'];

    function onChange(val) {
       props.setState(props.state.color = val);
        // switch (val) {
        //     case "red": props.setState(props.state.color = 'red');
        //         break;
        //     case "black": props.setState(props.state.color = 'black');
        //         break;
        //     case "blue": props.setState(props.state.color = 'blue');
        //         break;
        //     case "pink": props.setState(props.state.color = 'pink');
        //         break;
        // }
    }

    const createStyleButtons = colors.map((sBtn, i) =>
        <button style ={{background: sBtn}} key={i} className={sBtn} onClick={() => onChange(sBtn)}>{sBtn}</button>)

    return (
        <>
            {createStyleButtons}
        </>
    );
}

export default Style;
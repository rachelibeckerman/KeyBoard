import React, { useState } from 'react';

function DisplayBody(props) {

    const Body = props.state.map((letter, i) =>
        <span style={{color: letter.style.color , fontSize: letter.style.size, fontFamily: letter.style.font
        }} key={i} className={letter.value} >{letter.value}</span>);

    return (
        <>
            {Body}
        </>
    );
}
export default DisplayBody;
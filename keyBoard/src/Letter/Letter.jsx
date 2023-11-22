import React, { useState } from 'react';

function Letter(props){


    
    return (
    <>
        <button className={props.value} onClick = {()=>props.onBodyChange(props.value)}>{props.value}</button>
    </>
    );
    }

    export default Letter
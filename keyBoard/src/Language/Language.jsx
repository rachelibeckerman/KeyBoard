import React, { useState } from 'react';
import Letters from '../Letters/Letters';

function Language(props) {

    const Languages = ['English', 'עברית', 'UpperCase', '&123', '😀']

    function onChange(language) {
        let RequestedArray;
        switch (language) {
            case "English": RequestedArray = "EnglishLC";
                break;
            case "UpperCase": RequestedArray = "EnglishUC";
                break;
            case "עברית": RequestedArray = "Hebrew";
                break;
            case "&123": RequestedArray = "Numbers";
                break;
            case "😀": RequestedArray = "Emojis";
                break;
        }
        props.setState(RequestedArray);
    }

    const ButtonsLanguages = Languages.map((language, i) =>
        <button key={i} className={language} onClick={() => onChange(language)}>{language}</button>)
    return (
        <>
            {ButtonsLanguages}
        </>
    );
}

export default Language;
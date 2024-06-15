import React, { useState } from 'react';

const TextForm = ({ darkMode }) => {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("Upper case is clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        console.log("Lower case is clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleSpacesClick = () => {
        console.log("Remove the Extra Spaces " + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };

    const handleCopyClick = () => {
        console.log("Copy All Text " + text);
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    };

    const handleClearClick = () => {
        console.log("Clear All Texts " + text);
        let newText = '';
        setText(newText);
    };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };

    const myStyle = {
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#000',
        button: darkMode ? '' : ' #282f3c'
    };

    return (
        <>
            <div className='container my-3'>
                <div className="mb-3">
                    <h3>Enter the text for Analyze</h3>
                    <textarea 
                        style={myStyle} 
                        className="form-control" 
                        id="myBox" 
                        onChange={handleOnChange} 
                        value={text} 
                        rows="8">
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All Text</button>
                <button className="btn btn-primary mx-2" onClick={handleSpacesClick}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy All Text</button>
            </div>

            <div className='container my-3' style={myStyle}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes Read</p>

                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}

export default TextForm;

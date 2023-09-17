import React, {useState} from 'react'

export default function TextForms(props) {
    const [text, setText] = useState("")
    // const [selectedFont, setselectedFont] = useState('Arial')
    const handleToUpper = () =>{
        console.log("you clicked `Upper case btn`")
        setText(text.toLocaleUpperCase())
        props.showAlert("Converted to uppercase", 'success')
    }
    
    const handleOnChange = (event) =>{
        console.log("handle change ")
        setText(event.target.value)
    }

    const clearText = () =>{
        setText('')
        props.showAlert("All the text has been erased", 'danger')
    }
    return (
    <div className='container' style={{
        color: props.mode === 'light'? 'black':'white'}}>
        <h1 className="text-center">Text Forms</h1><br/>
        <h3> {props.headLabel} </h3>
        <div className="mb-3">
        <textarea style={{backgroundColor: props.mode === 'light' ? 'white':'black',
         color: props.mode === 'light'? 'black':'white'}} className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleToUpper}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Erase all</button> 
        <div className="container my-4" style={{
         color: props.mode === 'light'? 'black':'white'}}>
            <h4>Your text summary</h4>
            <p>
                {text.charAt(text.length-1) ===  "" ? text.split(" ").length - 1 : text.split(" ").length} words {text.length} characters
            </p>
            <p>Estimated time required to read the above text: <b>{0.008 * text.split(" ").length} Minutes</b></p>
        </div>
        <div className='container'>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

import React,{useState} from 'react'

export default function TextArea(props) {
    const handleUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearText=()=>{
        let newText="";
        setText(newText)
    }
     const handleCopy=()=>{
       var copyText=document.getElementById('exampleFormControlTextarea1');
       copyText.select();
       navigator.clipboard.writeText(copyText.value);
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
     }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const[text,setText]=useState("Enter Your Text Here!");
    return (
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}> 
        <div className="mb-3 ">
       <h1 >Enter Your Text Here</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1"onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#304457':'white' , color:props.mode==='dark'?'white':'black'}} value={text}rows="8"></textarea>
        <button className="btn btn-primary my-2 mx-1 " onClick={handleUpperCase}>Convert To UpperCase</button>
        <button className="btn btn-success my-2 mx-1" onClick={handleLowerCase}>Convert To LowerCase</button>
        <button className="btn btn-danger my-2 mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-info my-2 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-dark my-2 mx-1" onClick={handleClearText}>Clear Text</button>
        </div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h4>Time to Read</h4>
        <p>{0.008*text.split(" ").length} minutes</p>
    </div>
    </>
  )
}

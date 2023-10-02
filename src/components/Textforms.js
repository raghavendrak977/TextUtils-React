import React ,{useState} from 'react'

export default function Textforms(props)
 {


    const handleUpClick  =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick  =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleCapitalize = () => {
        const words = text.split(' ');
        const capitalizedWords = words.map((word) =>
        //  word.charAt(0).toUpperCase() + word.slice(1)
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
        const newCapitalizedSentence = capitalizedWords.join(' ');
        setText(newCapitalizedSentence);
        props.showAlert("Converted to Capitalize","success")
      };

      const reverse = () => {
        const reversed = text.split('').reverse().join('');
        setText(reversed);
        props.showAlert("Converted to Reverse","success")
      };

      const handleExtraSpace=()=>
      {
        const extspace=text.split(/[ ]+/)
        setText(extspace.join(" "))
        props.showAlert("Removed Extra spaces","success")
      };
      const handleCopy =()=>
      {
        let copytext=document.getElementById("myBox")
        navigator.clipboard.writeText(copytext.value)
        props.showAlert("Text Copied","success")
      }
    
    const handleClearTextClick  =()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success")
    }

    const  handleOnChange =(event)=>
    {
         setText(event.target.value);
    }

    const [text,setText] = useState('enter the text here')

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white':'black'}}>
    <h1>Enter the text to analyse</h1>
      <div className="mb-3">
  <label for="myBox" class="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'? 'grey':'white',color: props.mode==='dark'? 'white':'black'}}></textarea>
</div>

<button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to UpperCase</button>

<button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to LowerCase</button>


<button className='btn btn-primary mx-3' onClick={handleCapitalize}>Convert to Capitalize</button>


<button className='btn btn-primary mx-3' onClick={reverse}>Reverse</button>

<button className='btn btn-primary mx-3' onClick={handleExtraSpace}>Remove extra spaces</button>

<button className='btn btn-primary mx-3' onClick={handleCopy}>Copy</button>

<button className='btn btn-primary mx-3' onClick={handleClearTextClick}>Clear</button>

    </div>

    <div className='container my-5' style={{color: props.mode==='dark'? 'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length } -words & {text.length}-characters </p>
        <p>{0.008*text.split(" ").length}-minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter someThing to preview"}</p>
        
    </div>
    </>
  )
}

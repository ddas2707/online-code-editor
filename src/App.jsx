import React from 'react'
import { useState } from 'react';
import './App.css';

const App = () => {

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  

  const handleOutput=(e)=>{
    const iframe = document.getElementById("output");
    iframe.contentDocument.body.innerHTML = 
          htmlCode + "<style>" + cssCode + "</style>";
    iframe.contentWindow.eval(jsCode);
    
  };

  return (
    <div className='playground'>
      {/* for ide */}
      <div className="left">
        {/* <-------------------------forHtml------------------------> */}
        <label>Html</label>
        <textarea name='html' 
        onChange={(e)=> setHtmlCode(e.target.value)}></textarea>
        {/* <-------------------------forCss-------------------------> */}
        <label>CSS</label>
        <textarea name='Css' 
        onChange={(e)=> setCssCode(e.target.value)}></textarea>
        {/* <-------------------------forJavascript-------------------> */}
        <label>JavaScript</label>
        <textarea name='Javascript' 
        onChange={(e)=> setJsCode(e.target.value)}></textarea>
        
      </div>
        {/* <=----------------------for output---------------------> */}
      <div className="right">
        <button onClick={handleOutput}>Run</button>

        <iframe id='output'></iframe>
      </div>
    </div>
  )
}

export default App;
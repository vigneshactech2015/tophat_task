import React from 'react';
import { useState,useEffect } from 'react';
import "./textarea.css";
function Textarea({minRows}) {
    const [rows, setRows] = useState(minRows);
    const [value, setValue] = useState("");

    useEffect(() => {
        const rowlen = value.split("\n");
    
        if (rowlen.length > minRows) {
          setRows(rowlen.length);
        }
      }, [value]);

    const handle = () => {
        localStorage.setItem('Name', value);
     };

  

   
  return (
    <div className="align"> 
    <textarea rows={rows} wrap="virtual" value={value} onChange={(event) => setValue(event.target.value)} onKeyPress={handle}/>
   <div>{value}</div> 
    </div>
  )
}

export default Textarea;
import React, { Fragment, useState } from "react"
import ReactDOM from "react-dom"

const InputPriority=(props)=>{
    const [sletedValue, setSelectedValue]= useState(props.Priority[0]);
    const seletPriority=(event)=>{
   
    setSelectedValue(event.target.value);
      props.setPriority(event.target.value);
    }
   
      return(
          <Fragment>
                <select className={"col-4"} onChange={seletPriority} value ={props.value} style={props.style}>
            
            {
                
            props.Priority.map((item,index)=>{
                return  <option key={index}>{item}</option>
             })
            }
            
            </select>
          </Fragment>
      )
}

export default InputPriority;
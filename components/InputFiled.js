import React, { Fragment, useState } from "react"
import ReactDOM from "react-dom"
import InputPriority from "./inputPriority"
const InputFiled = (props) => {
    const Priority=["High","Medium","Low"];
    const [inputValue, inputSetValue] = useState("");
   const [PriorityValue, setPriority]= useState("Low");
    const onValuechage=(event)=>{
        inputSetValue(event.target.value);
    }
  const seletPriority=(value)=>{
setPriority(value);
  }

const submit=()=>{
   if(inputValue){
    props.addTask(inputValue,PriorityValue);
   }
   inputSetValue("");
}
    return (
        <div className={"row border"}>
            <input className={"col-4"} placeholder={props.placeholder} value={inputValue} onChange={onValuechage} />
           <InputPriority Priority={Priority} setPriority={seletPriority}/>
            <button className={"col-4"} onClick={submit}>Add task</button>
        </div>
    )
}

export default InputFiled;
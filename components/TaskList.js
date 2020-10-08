import React, { Fragment, useState, useEffect} from "react"
import InputPriority from "./inputPriority"
const TaskList=(props)=>{
    const Priority=["High","Medium","Low"];
    
    const [chagedPriority, changePriority]= useState("Low");
    // const seletPriority=(event)=>{
    //     setPriority(event.target.value)
    //     props.togglePriority(PriorityValue);
  
    // }
 return (
<Fragment>

<ol className="col-12 mt-5" style={props.style}>{
        props.task.map((item, index) =>{
            let onclicked=()=>{
                 props.toggledata(index);
            };
           let onChangePriority=(data)=>{
            props.togglePriority(index,data);
           }
        return (<li key={index} className={"row border"}> 
        <span className={"col-2 border"}>{index}</span><span className={"col-4 border "}>{item.name} </span>
         <InputPriority Priority={Priority} value={item.Priority} setPriority={onChangePriority}/>
        <span onClick={onclicked} className={"border col-2"}>{item.isCompleted ?  "✔️" : "❎" }</span>
       </li>)
        }) }
</ol>
</Fragment>
  )
}

export default TaskList;
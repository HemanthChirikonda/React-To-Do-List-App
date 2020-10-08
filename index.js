import React, {Fragment,useState,useEffect} from "react"
import ReactDOM from "react-dom"
import Title from "./components/Title"
import InputField from "./components/InputFiled"
import TaskList from "./components/TaskList"
import InputPriority from "./components/inputPriority"
import Title4 from "./components/Title4"
import Title5 from "./components/Title5"

const App =()=>{
   const filter=["All","High","Medium","Low","Pending","Completed"];
  
   const [filterValue, setfilter]= useState("All");
    const [task, setTask]= useState([
        {name:"hemanth",Priority:"Low",isCompleted:true},
        {name:"Sony",Priority:"High",isCompleted:true},
        {name:"tada",Priority:"Medium",isCompleted:false},

    ]);
  
    const [filterdata,setFilterdata]= useState(task);
    
   
    
    const selectFilter=(value)=>{
        setfilter(value);
     if(value === "All"){
        setFilterdata(task);
     }else if(value === "Pending"){
        setFilterdata(task.filter((item)=>{
            if(!item.isCompleted){
             return item
             
            }
         }));
    }else if(value==="Completed"){
        setFilterdata(task.filter((item)=>{
            if(item.isCompleted){
                return item
             
            }
         }));
     }else {
        setFilterdata(task.filter((item)=>{
           if(item.Priority === value){
            return item
            
           }
        }));
     }  
    }
    const toggledata=(dataindex)=>{
        //setFilterdata(task);
           setTask(task.map((item,index)=>{
               if(dataindex === index){
                   return {
                       ...item,
                       isCompleted:!item.isCompleted
                   }
               }
               return item;
           }));
           setfilter("All");
        setFilterdata(task.map((item,index)=>{
            if(dataindex === index){
                return {
                    ...item,
                    isCompleted:!item.isCompleted
                }
            }
            return item;
        }));
           
    }
    const addTask=(name,priority)=>{
        // task.push({
        //     name:name,
        //     Priority:priority,
        //     isCompleted:false
        //    })
        setTask([...task,{
                name:name,
                Priority:priority,
                isCompleted:false
               }]);
        setfilter("All");
        setFilterdata([...task,{
            name:name,
            Priority:priority,
            isCompleted:false
           }]);
        
    }

    const togglePriority=(dataindex,value)=>{
          setTask(task.map((item,index)=>{
          if(index===dataindex){
            return {
                ...item,
                Priority: value
            }
          }
          return item;
          }));
          setfilter("All");
          setFilterdata(task);

    }
return (
   <Fragment >
       <div className={"col-12 p-3"} style={{"alignItems":"center",background:"#ff8c8c"}}>
       <InputField addTask={addTask}/>
       </div>
       <div className="col-12" style={{"alignItems":"center","textAlign":"center",background:"#FF9F9F"}}>
              <Title  text={"Dash Board"}/>
              <div className={"row"}>
               <div className={"col-2"}>                  
               <Title4 text={"Completed"}/>
               <Title5 text={task.filter((item)=>{if(item.isCompleted){return item}}).length}/>
               </div>
               <div className={"col-3"}>
               <Title4 text={"Pending"}/>
               <Title5 text={task.filter((item)=>{if(!item.isCompleted){return item}}).length}/>
               </div>
               <div className={"col"}>
               <Title4 text={"Low"} />
               <Title5 text={task.filter((item)=>{if(item.Priority === "Low"){return item}}).length}/>
               </div>
               <div className={"col-3"}>
               <Title4 text={"Medium"} />
               <Title5 text={task.filter((item)=>{if(item.Priority === "Medium"){return item}}).length}/>
               </div>
               <div className={"col-2"}>
               <Title4 text={"High"} />
               <Title5 text={task.filter((item)=>{if(item.Priority === "High"){return item}}).length}/>
               </div>
              </div>
          </div>
     
     
      <div className={" pt-2 col-4"} style={{"alignItems":"center","textAlign":"end",background:"#ffebeb"}}>
          <Title5 text={"Filter By Priority"}/>
          </div>
         <InputPriority Priority={filter} setPriority={selectFilter} value={filterValue} />
         <div className={"col-4"} style={{"alignItems":"center","textAlign":"end",background:"#ffebeb"}}></div>
    
    
      <div className={"col-12"} style={{background:"#ffebeb"}}>
      <TaskList task={filterdata} togglePriority={togglePriority} toggledata={toggledata} style={{background:"#ffebeb"}}/>
      </div>    
   </Fragment>
)
}

ReactDOM.render(<App />,document.querySelector("#app-root"))
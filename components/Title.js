import React, {Fragment,useState} from "react"
import ReactDOM from "react-dom"

const Title =(props)=>{
return (<h1 style={props.style}>{props.text}</h1>)
}

export default Title;
import React from "react";

export default function Die(props){ 
    // console.log(props.value.isHeld)
    return (
        <div 
            id= {props.value.isHeld ? "die--held":""}
            className="die--individual" 
            onClick={()=>props.hold(props.value.id)}
            > 
            <h2 className="die--num">{props.value.value}</h2>
        </div>
    )
}
import React from "react";

export default function Alert(props){
    console.log(props.HighScore)
    // const [isNewHigh,setNewHigh] = React.useState(true)
    // setNewHigh (prevNewHigh => {
    //     return(
    //         props.count < props.HighScore ? prevNewHigh : !prevNewHigh 
    //     )
    // })
    return(
        <div className="alert-div">
            <h1>Congrats</h1>
            <h3>🎉🎊You won the game!!🎊🎉🥳</h3>
            <p>{`Your score : ${props.count}`}</p>
            <p>{`Best score : ${props.HighScore}`}</p>
            {/* {isNewHigh && <p>{`New Best Score : ${props.count}`}</p>} */}
            <button onClick={props.alertFunction} className="alert--btn">Thank You</button>

            
        </div>
    )
}
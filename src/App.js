import React from 'react';
import './App.css';
import Die from './components/Die';
import {nanoid} from "nanoid";
import Confetti from 'react-confetti';
import Alert from "./components/Alert";



function App() {
  const [diceState, setDiceState] = React.useState(allNewDice())
  const [tenzies,setTenzies] = React.useState(false)
  const [lowCount,setLowCount] = React.useState(99999)
  // console.log(cat);
  let HighScore =0
  
  React.useEffect(()=>{
    
    const allHeld= diceState.every(die => die.isHeld)
    const firstValue = diceState[0].value
    const allSameValue = diceState.every(die => die.value === firstValue)  
    // count === 0 ? setLowCount(prevLowCount => prevLowCount) :setLowCount(prevCount => count < prevCount ? count : prevCount)
    
    if(allSameValue && allHeld){
      setTenzies(true)
      setIsAlert(true)
      console.log("You Won!!!")
      console.log(`Your Score : ${count}`)
      setLowCount(prevCount => count < prevCount ? count : prevCount)
      console.log(`Previous High Score : ${lowCount}`)
      localStorage.setItem('highScore',lowCount)
      // HighScore = localStorage.getItem('highScore')
    }
    console.log(tenzies)
    console.log(HighScore);
  },[diceState])
  function holdDice(id){
    setDiceState(oldDice => oldDice.map(die => {
      return die.id === id ?
        {...die,isHeld: !die.isHeld}:
        die
      }))
    }
    
    
    function allNewDice(){
      // const valueArray = Array.from({length : 10},()=>Math.ceil (Math.random()* 6))
      // return valueArray
      const valueArray = []
      for (let i = 0; i < 10; i++) {
        valueArray.push({
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id : nanoid() 
        }) 
      }
      return valueArray
  }
  
  function newGame(){
    setDiceState(oldDice => oldDice.map(() => {
      setCount(0)
      return {
        value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id : nanoid() 
        }
      }))
      setTenzies(false)
    }
  const [count,setCount] = React.useState(0)

  
  
  function handleDieClick(){
    setCount(prevCount => prevCount+1)
    
    setDiceState(oldDice => oldDice.map(die => {
      return die.isHeld ?
      die:
      {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
          id : nanoid() 
        }
    }))

  }

  const diceElements = diceState.map((value)=><Die key={value.id} value={value} hold={()=>holdDice(value.id)}/>)
  const  width = 320
  const  height = 400
  const [isAlert,setIsAlert]=React.useState(false)
  function handleAlert(){
    return(
      setIsAlert(prevAlert => !prevAlert)
      
    )}


  return (
    <div className="App">
      <div className='App-in'>
        {!isAlert &&
          <div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='die--container'>
              {diceElements}
            </div>
            <button className='btn' onClick={tenzies ? newGame : handleDieClick}>{tenzies? "New Game" : "Roll"}</button>
            {tenzies && <Confetti 
              width = {width}
              height = {height}
            />}
          </div>}
        {isAlert &&<div>
        <Alert 
          count = {count}
          HighScore ={localStorage.getItem('highScore')}  
          alertFunction = {handleAlert}
        />
        <Confetti 
              width = {width}
              height = {height}
        />
        </div>}
      </div>
    </div>
  );
}

export default App;

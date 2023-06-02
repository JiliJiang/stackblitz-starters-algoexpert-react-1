import React, {useState} from "react";
import "./style.css";

export default function App() {

const [total, setTotal] = useState(0.00);
const [tip, setTip] = useState(0.00);

function calculateTip(){

  const bill = document.getElementById('bill').value
  const percent = document.getElementById('percent').value
  const people = document.getElementById('people').value

  setTotal(parseInt(bill)*parseInt(percent)/100)
  setTip(parseInt(bill)*parseInt(percent)/100/parseInt(people))

}

  function render(){
    return(
      <form>
        <label>Bill</label><br/>
        <input id="bill" onChange={calculateTip}/><br/><br/>
        <label>Tip Percentage</label><br/>
        <input id="percent" onChange={calculateTip}/><br/><br/>
        <label>Number of People</label><br/>
        <input id="people" onChange={calculateTip}/><br/><br/>
        <p style={{"margin-left": "60px"}}>Total Tip: {total}</p>
        <p style={{"margin-left": "60px"}}>Tip Per Person: {tip}</p>
      </form>
    )
  }

  return (
    <div>
      {render()}
    </div>
  );
}

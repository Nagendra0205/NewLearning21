import React, { useState } from 'react'

const Calculator = () => {
    const[num1,setNum1]=useState<any>();
    const [num2,setNum2]=useState<any>();
    const [ope,setOpe]=useState<string>();
    const [result,setResult]=useState<any>();


    const ChangeHandler=(e:any)=>{
        setNum1(e.target.value)
    }
    const ChangeHandler2=(e:any)=>{
        setNum2(e.target.value)
    }
    const ChangeHandler3=(e:any)=>{
        setOpe(e.target.value)
    }
    const ClickHandler=(e:any)=>{
        e.preventDefault()
        const num11=parseFloat(num1);
        const num22=parseFloat(num2);
        let res:number
      switch(ope){
        case '+':
          res=num11+num22;
          break;
        case '-':
          res=num11+num22;
          break;
        case '*':
          res=num11*num22;
          break;
        case '/':
          res=num11/num22;
          break;
        default:
          res=0;
      }
      console.log(res)
      setResult(res);
    }




      
    
  return (
    <div>
      <h2>Caclulator</h2>
      <form style={{border:"2px solid blue", width:"250px" ,height:"250px",color:"red",display:'flex',flexDirection:'column',gap:'5px'}}>
        <label>Num1:</label>
        <input type='text' name={num1} onChange={ChangeHandler}/><br/>
        <label>Num2:</label>
        <input type='text' name={num2} onChange={ChangeHandler2}/><br/>
        <label>Select operator:</label>
        <select onChange={ChangeHandler3} defaultValue="select">

          <option>Select</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select><br/>
        <button onClick={ClickHandler} style={{textAlign:'left',color:'red',background:'blue', marginLeft:'150px'}}>Calculate</button>
      </form>
      {num1}
      {num2}
      {ope}
      <h2> Result:{result}</h2>
    </div>
  )
}

export default Calculator

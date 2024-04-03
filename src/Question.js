import React from 'react'

export default function Quetion(props) {
  const onChange = (questionNumber, selectedOption) => {
    // Logic for handling option change
    console.log(`Question ${questionNumber} selected option: ${selectedOption}`);
};
  return (
    <div className='question-container'>
        <form>
            <h3>Q {props.qnum} : {props.ques}</h3>
            <input type='radio' name={props.qnum} value='A' onChange={(e) => onChange(props.qnum,e.target.value)}/>A.{props.opA}
            <br></br>
            <input type='radio' name={props.qnum} value='B' onChange={(e) => onChange(props.qnum,e.target.value)}/>B.{props.opB}
            <br></br>
            <input type='radio' name={props.qnum} value='C' onChange={(e) => onChange(props.qnum,e.target.value)}/>C.{props.opC}
            <br></br>
            <input type='radio' name={props.qnum} value='D' onChange={(e) => onChange(props.qnum,e.target.value)}/>D.{props.opD}
            <br></br>
        </form>
    </div>
  )
}

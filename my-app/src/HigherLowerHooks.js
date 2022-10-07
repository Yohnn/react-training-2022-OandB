import {React, useState,useRef} from "react";

function HigherLowerHooks() {
    const numToGuess = 37;

    const number = useRef(0);
    const [message, setMessage] = useState("");

    function evaluateNumber() {
        setMessage(() => {
            if (number.current.value < numToGuess) {
                return "Wrong! Number too LOW. Try again!";
            } else if (number.current.value > numToGuess) {
                return "Wrong! Number too HIGH. Try again!";
            } else {
                return "You got it!!!";
            }
        });
    }

    return(
        <div className='container py-2'>
            <input className='center pb-1 form-control' type='number' placeholder={'Enter your guess here.'} ref={number}/>
            <button onClick={evaluateNumber}>Guess</button>
            <div> {message} </div>
        </div>
    );
}

// function HigherLowerHooks() {
//     let numToGuess = 37;
//     const[message, setMessage] = useState("");

//     function getNumber(e) {
//         const tempNum = parseFloat(e.target.value);
//         if (isNaN(tempNum)) {
//             setMessage("Please enter a number.")
//         } else if (tempNum < numToGuess) {
//             setMessage("Welp!. Number too low. Try again!");
//         } else if (tempNum > numToGuess) {
//             setMessage("Welp! Number too high. Try again!");
//         } else if (tempNum === numToGuess) {
//             setMessage("You got it!")
//         } 
//     }

//     return(
//         <div className='container py-2'>
//             <input className='center pb-1' type='number' placeholder={"Enter your guess here."} onChange={getNumber}/>
//             <div>{message}</div>
//         </div>
//     )
// }

export default HigherLowerHooks;
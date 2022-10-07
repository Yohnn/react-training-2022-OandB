// StateCounterHooks.js
/**
 * Exercise: Complete the implementation for decreaseCount
 * Check for lower limit before performing the operations.
 * */

 import React, {useState} from "react";


 function StateCounterHooks() {
 
   const[count, setCount] = useState(0);
 
   // const[upperLimit, setUpperLimit] = useState(12);
   // const[lowerLimit, setLowerLimit] = useState(-6);
 
   const UPPER_LIMIT = 12;
   const LOWER_LIMIT = -6;
 
   function increaseCount() {
     setCount(function(c){
       if(c <= UPPER_LIMIT) {
         c += 1;
         return c;
       } else {
        return c;
       }
     });
   }
 
   function decreaseCount() {
     setCount(function(c){
        if(c >= LOWER_LIMIT) {
            c -= 1;
            return c;
        } else {
            return c;
        }
     });
   }
 
   return(
       <React.Fragment>
         <button
             onClick={increaseCount}>+</button>
 
         <button
             onClick={decreaseCount}>-</button>
         <div>COUNTER : {count} </div>
       </React.Fragment>
   );
 }
 
 export default StateCounterHooks;
 // --------------------
 
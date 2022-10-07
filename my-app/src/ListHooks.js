import {React,useRef,useState,useEffect} from "react";
let countId = 0;
function ListHooks() {
    const [items, setItems] = useState([]);
    const input = useRef("");
    const [itemsToRemove, setItemsToRemove] = useState([]);
    function idGenerator() {
        countId += 1;
        return countId;
    }
    function handleClick(){
        console.log(input.current.value);
        setItems([...items, String(input.current.value)]);
        document.getElementById("input").value = "";
    }
    function handleEnter(e){
        if (e.key === "Enter") {
            let generatedId = idGenerator();
            console.log("handleEnter" + generatedId);
            setItems([...items, 
                <div id={String(generatedId)} >
                    <input id={String(generatedId)} type="checkbox" onClick={handleCheck}/>
                    <label for={String(generatedId)}> {input.current.value} </label>
                </div>]);
            console.log(items);
            document.getElementById("input").value = "";
        }
    }
    function handleCheck(evt) {
        console.log("handleCheck" + String(evt.target.id));
    
        //NOT WORKING
        //setItemsToRemove([...itemsToRemove, evt.target.id]); //THE WRONG ONE
        //setItemsToRemove(() => {return [...itemsToRemove, evt.target.id]}); //EQUIVALENT WITH ABOVE

        //WORKING
        setItemsToRemove(arr => [...arr, evt.target.id]); //WHAT IS passed into arr?
        //setItemsToRemove((arr) => {return [...arr, evt.target.id]}); //EQUIVALENT WITH ABOVE
    }

    function handleRemove() {
        // console.log(itemsToRemove);
        for (let idOfItem of itemsToRemove) {
            document.getElementById(idOfItem)?.remove();
        }
    }

    return(
        <div className='container pl-1 bg-light bg-gradient text-dark'>
            <h1>To-Do List</h1>
            <input id="input" type="text" placeholder={"New To-Do"} ref={input} onKeyPress={handleEnter}/>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleRemove}>Remove</button>
            <ul className='list-unstyled'>{items.map(item => item)}</ul>
        </div>
    )
}

export default ListHooks;
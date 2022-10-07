import {React,useRef,useState,useEffect} from "react";

let countId = 0;

function ListHooks2() {
    const [items, setItems] = useState([]);
    const input = useRef("");
    const [itemsToRemove, setItemsToRemove] = useState([]);

    
    //const [countId, setCountId] = useState(0);

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
            setItems([...items, String(input.current.value)]);
            document.getElementById("input").value = "";
        }
    }

    // function handleEnter(e){
    //     if (e.key === "Enter") {
    //         let generatedId = idGenerator();
    //         console.log("handleEnter" + generatedId);
    //         setItems([...items, ]);
    //         document.getElementById("input").value = "";
    //     }
    // }

    // function handleCheck(evt) {
    //     let idTarget = evt.target.id;
    //     console.log("handleCheck " + String(idTarget));
    //     setItemsToRemove([...itemsToRemove, idTarget]);
    //     console.log(itemsToRemove);
    //     console.log(document.getElementsByName("item"));
    // }

    function handleCheck(evt) {
        console.log("handleCheck " + String(evt.target.id) + " parent name is " + String(evt.target.parentNode.id));
        //setItemsToRemove([...itemsToRemove, idTarget]);
        console.log(itemsToRemove);
        console.log(document.getElementsByName("item"));
    }


    function handleRemove() {
        for (let i = 0; i < itemsToRemove.length; i++) {
            document.getElementById(itemsToRemove[i])?.remove();
        }
    }
    
    return(
        <div className='container pl-1 bg-light bg-gradient text-dark'>
            <h1>To-Do List</h1>
            <input id="input" type="text" placeholder={"New To-Do"} ref={input} onKeyPress={handleEnter}/>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleRemove}>Remove</button>
            <ul className='list-unstyled'>{items.map(item => <li name="item"><input type="checkbox" onClick={handleCheck}/> {item}</li>)}</ul>
        </div>
    )

    // return(
    //     <div className='container pl-1 bg-light bg-gradient text-dark'>
    //         <h1>To-Do List</h1>
    //         <input id="input" type="text" placeholder={"New To-Do"} ref={input} onKeyPress={handleEnter}/>
    //         <button onClick={handleClick}>Add</button>
    //         <button onClick={handleRemove}>Remove</button>
    //         <ul className='list-unstyled'>{items.map(item => 
    //             <div name="item">
    //             <input type="checkbox" onClick={handleCheck}/> {input.current.value}
    //         </div>)}</ul>
    //     </div>
    // )
    
}

export default ListHooks2;
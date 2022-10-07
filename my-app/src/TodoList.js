import {useRef, useState} from "react";
import './MyStyles.css';


let countId = 0;
function TodoList() {

  const[todoArr, setTodoArr] = useState([]);
  const[todoItem, setTodoItem] = useState("");
  const input = useRef("");
  
  function idGenerator() {
    countId += 1;
    return countId;
}

  function getValue(e) {
    setTodoItem(e.target.value);
  }

  function handleEnter(e) {
    if(e.key === 'Enter') {
      updateTodoArr();
    }
  }

  function handleClick() {
    updateTodoArr();
  }

  function handleRemove(evt) {
    document.getElementById(evt.target.name)?.remove();
  }


  function handleRemoveAll() {
    var e = document.querySelector("ul");
    //setToDoArr(prevState => []) seems to produce an error
    //hence I used the removal of all children for the div
    
    //e.firstElementChild can be used.
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
  }

  function updateTodoArr() {
    let divId = idGenerator();
    // todoArr.push(todoItem);
    console.log("Created new todo item with id: " + divId);

    setTodoArr( prevState => [...prevState, 
        <div className='container' id={String(divId)}>
            <div className='px-1 mb-1 align-content-center d-flex justify-content-between pb-1 w-25' style={{backgroundColor: '#f6f4ed'}}>
                <div className='MyListItem text-break' name={String(todoItem)}>
                    {todoItem} 
                </div>
                <button name={String(divId)} 
                            className='py-0 px-2 ms-1 me-1 btn btn-sm btn-danger' 
                            onClick={handleRemove} 
                            style={{fontSize: 10, fontWeight: 900}}
                            type='button'
                    >X</button>  
            </div>
        </div>
    ]);
    input.current.value = "";
    setTodoItem("");
    console.log(todoArr.at(-1).props);
  }

  return(
    <html lang="en">
        <head>
            <title>My To-Do List</title>
        </head>
        <body style={{backgroundColor: '#765555', minHeight: '100vh'}}>
        <div className='container pl-1' style={{backgroundColor: '#f4ebe0', minHeight: '100vh'}}>
            <h1 style={{fontFamily: 'GloriaHallelujah', fontSize: 50}}>My To-Do List</h1>
            <input type="text"
                    placeholder={"Enter new To-Do"}
                    onKeyDown={handleEnter}
                    onChange={getValue}
                    ref={input}
                    className='me-1 w-25'
            />
            <button className='MyButton me-1' onClick={handleClick} >Add</button>
            <button className='MyButton' onClick={handleRemoveAll}>Remove All</button>
            <ul>{todoArr.map(todo => todo)}</ul>
        </div>
        </body>
    </html>
);
}

export default TodoList;

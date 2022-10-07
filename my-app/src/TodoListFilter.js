import {useRef, useState} from "react";

let countId = 0;
function TodoList() {

  const[todoArr, setTodoArr] = useState([]);
  const[todoArrFilter, setTodoArrFilter] = useState([]);
  const[todoItem, setTodoItem] = useState("");
  const input = useRef("");
  const filterInput = useRef("");
  
//   useEffect(() => {
//     todoArrRender = [...todoArr];
//     todoArrRender.filter(todo => todo.props.children.props.name.includes("j"));
//   });
  function idGenerator() {
    countId += 1;
    return countId;
}
  function filterToDoList() {
    setTodoArrFilter(todoArr);
    setTodoArrFilter(prevState => {
        prevState.filter(todo => todo.props.children.props.name.includes(filterInput))
    });
    //todoArrRender.filter(todo => todo.props.children.props.name.includes("j"));
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
        <div className='container flex pb-1' id={String(divId)}>
            <li name={String(todoItem)}> 
                {todoItem}  
                <button name={String(divId)} className='py-0 px-1 ms-1 btn-sm' onClick={handleRemove} style={{fontSize: 10}}>X</button>
            </li> 
            
        </div>
    ]);
    input.current.value = "";
    setTodoItem("");
    console.log(todoArrFilter);
    //filterToDoList();
  }

//   return(
//       <div className='container pl-1 bg-light bg-gradient text-dark'>
//         <h1>My To-Do List</h1>
//         <input type="text"
//                placeholder={"Enter new To-Do"}
//                onKeyDown={handleEnter}
//                onChange={getValue}
//                ref={input}
//         />
//         <button onClick={handleClick}>Add</button>
//         <button onClick={handleRemoveAll}>Remove All</button>
//         <ul className='list-unstyled'>{todoArr.map(todo => todo)}</ul>

//       </div>
//   );

  return(
    <div className='container pl-1 bg-light bg-gradient text-dark'>
      <h1>My To-Do List</h1>
      <input type="text"
             placeholder={"Enter new To-Do"}
             onKeyDown={handleEnter}
             onChange={getValue}
             ref={input}
      />
      <button onClick={handleClick}>Add</button>
      <button onClick={handleRemoveAll}>Remove All</button>
      <input type="text" placeholder={"Filter To Do Items"} onChange={filterToDoList} ref={filterInput}></input>
      <ul>
        {todoArrFilter.map(
            todo => todo
        )}
        </ul>

    </div>
);
}

export default TodoList;

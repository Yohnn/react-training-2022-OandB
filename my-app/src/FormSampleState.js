import {useState} from "react";

export default function FormSampleState() {

    const[lastname, setLastname] = useState();
    const[firstname, setFirstname] = useState();
    const[email, setEmail] = useState();
    const[formError, setFormError] = useState([]);
  
    function submit(e) {
      e.preventDefault();
  
      let errCheck = areThereErrors();
    }
  
    function areThereErrors() {
  
      // this is where we check
  
  
  
      if(formError.length == 0) {
        return false;
      }
      else {
        return true;
      }
    }
  
    function getFirstname(e) {
  
    }
  
    function getLastname(e) {
  
    }
  
    function getEmail(e) {
  
    }
  
    return(
        <form onSubmit={submit}>
          <div className="form-group" >
            <input type="text"
                   onChange={getFirstname}
                   value={firstname}
                   placeholder="First name"
                   className="form-control"/>
            <input type="text"
                   onChange={getLastname}
                   value={lastname}
                   placeholder={"Last name"}
                   className="form-control" />
            <input type="email"
                   onChange={getEmail}
                   value={email}
                   placeholder={"Email"}
                   className="form-control"/>
            <button type="submit">Submit</button>
          </div>
        </form>
    )
  }
  
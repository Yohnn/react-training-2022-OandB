import {useRef} from "react";
import {clear} from "@testing-library/user-event/dist/clear";


function FormSampleSolution() {

  const txtFirstname = useRef();
  const txtLastname = useRef();
  const txtEmail = useRef();
  const divOutput = useRef();

  const errorsArr = [];

  function submit(event) {
    event.preventDefault();

    console.log(`current size of error array: ${errorsArr.length}`);
    console.log(errorsArr);

    findErrors();

    if(errorsArr.length > 0) {
      // there are errors on the form
      console.log(errorsArr);
      divOutput.current.value = errorsArr
    } else {
      // this is where we submit the data
      console.log("Success!");
      divOutput.current.value = "Success!"

      const data = {
        firstname: txtFirstname.current.value,
        lastname: txtLastname.current.value,
        email: txtEmail.current.value
      }
      console.log(data);
      saveDataToServer(data)
    }
  }

  function saveDataToServer(myData) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myData)
    }
    let prom = fetch('https://reqres.in/api/posts', requestOptions)

    prom.then(response => response.json())
    prom.then(function(resdata) {
      console.log(resdata);
    }).catch(function(resdata){
      console.log(resdata);
    });
  }

  function findErrors() {

    let lastname = txtLastname.current.value;
    let firstname = txtFirstname.current.value;
    let email = txtEmail.current.value;

    if(!lastname || !firstname || !email) {
      // raise an error
      errorsArr.push("Either lastname, firstname, or email is missing");
    }

    var tempEmailFltr = [...email].filter((i)=> i === '@');
    if ((email.length > 100) || (tempEmailFltr.length !== 1)) {
      // raise error
      errorsArr.push("Email is not well-formed or exceeds 100 chars");
    }
  }

  function onFieldFocus() {
    clearFields();
  }

  function clearFields() {
    txtFirstname.current.value = '';
    txtLastname.current.value = '';
    txtEmail.current.value = '';
    // clear the errorsArr as well
    errorsArr.length = 0;
  }

  return(
      <form onSubmit={submit}>
        <div className="form-group" >
          <input type="text"
                 onFocus={onFieldFocus}
                 ref={txtFirstname}
                 placeholder="First name"
                 className="form-control"/>
          <input type="text"
                 ref={txtLastname}
                 placeholder={"Last name"}
                 className="form-control" />
          <input type="email"
                 ref={txtEmail}
                 placeholder={"Email"}
                 className="form-control"/>
          <button type="submit">Submit</button>
          <div ref={divOutput}></div>
        </div>
      </form>
  )
}

export default FormSampleSolution;

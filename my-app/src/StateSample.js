import React, { Component } from "react";

class StateSample extends Component {

    
  constructor() {
    super();

    this.state = {name: "John Doe", employeeStatus: "Employed"}
    console.log(this.state);
  }


  handleClick = () => {
    let name1 = "John Doe";
    let name2 = "James Smith";
    let employeeStatus1 = "Employed";
    let employeeStatus2 = "Unemployed";
    if (this.state.name === name1){
        this.setState({name: name2, employeeStatus: employeeStatus2});
    } else if (this.state.name === name2){
        this.setState({name: name1, employeeStatus: employeeStatus1});
    }
    console.log(this.state);
  }


  render(){
    return(
      <html lang='en'>
        <head>
          <title>State Sample</title>
          {/* <meta charSet="utf08">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          </meta>
          </meta> */}
        </head>
        <body style={{backgroundColor: '#808B96'}}>
        <div className='container text-center'>
          <div className='row justify-content-center'>
            <div className='col-md-auto w-15 p-5 border border-dark' style={{backgroundColor: '#273746'}}>
             <button className='fs-3' onClick={this.handleClick}>Click me</button>
            </div>
            <div className='col-6 w-15 p-5 text-light' style={{backgroundColor: '#273746'}}>
                <h1>{this.state.name}</h1>
                <h3>{this.state.employeeStatus}</h3>
              </div>
          </div>
          
        </div>
        </body>
      </html>
          
    );
  }
}

export default StateSample;

{/* <div className='container'>
          <section>
            <button onClick={this.handleClick}>Click me</button>
          </section>
          <section>
          <p className='text-info fs-1'>
            {this.state.name} <br/>
            {this.state.employeeStatus}
            </p>
          </section>
        </div> */}
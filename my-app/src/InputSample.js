import {Component} from "react";

class InputSample extends Component {


  constructor() {
    super();

    this.fno = 0;
    this.sno = 0;

    this.state = {gcf:0, isItVisible:"hidden"};

  }

  getFirstNo = (evt) => {
    this.fno = evt.target.value;
  }

  getSecondNo = (evt) => {
    this.sno = evt.target.value;
  }

  clickHandler = () => {

    let bigno = 0;
    let smallno = 0;
    let rem = 1;

    if(this.fno > this.sno) {
      bigno = this.fno;
      smallno = this.sno;
    }
    else {
      bigno = this.sno;
      smallno = this.fno;
    }

    while((rem = bigno % smallno) != 0) {
      bigno = smallno;
      smallno = rem;
    }

    console.log(`GCF = ${smallno}`);
    this.setState({gcf:smallno, isItVisible:"visible"})
  }

  render() {
    return (
        <div>
          <input type="number" onChange={this.getFirstNo} className="form-control" id="one"/>
          <input type="number" onChange={this.getSecondNo} className="form-control" id="two"/>
          <button onClick={this.clickHandler} className="btn btn-outline-dark">Get GCF</button>
          <div style={{visibility: this.state.isItVisible}}>{this.state.gcf}</div>
        </div>
    );
  }
}

export default InputSample;

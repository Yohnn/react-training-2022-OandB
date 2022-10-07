import {Component} from "react";

/**
 * Controlled input in React
 *
 * When a user inputs a value in CM, (use the onChange even), the value in the inches input area
 * calculates automatically -- and vice versa.
 * */


class Converter extends Component {
    constructor(){
        super();
        this.cmToInConst = 2.54
        this.state = ({cm: 0, in: 0})
        //this.state = {cm: null, in: null}
    }

    convertCm = (evt) => {
      this.setState({cm: evt.target.value, in: (evt.target.value * this.cmToInConst)});
      document.getElementById("inches").value = evt.target.value * this.cmToInConst;
    }

    convertIn = (evt) => {
      this.setState({in: evt.target.value, cm: (evt.target.value / this.cmToInConst)});
      document.getElementById("cm").value = evt.target.value / this.cmToInConst;
    }
    

  render() {
    return (
        <div className='container-sm'>
          <input type="number" placeholder={"centimeters"} onChange={this.convertCm} className="form-control" id="cm"/>
          <input type="number" placeholder={"inches"} onChange={this.convertIn} className="form-control" id="inches"/>
        </div>
    );
  }
}

export default Converter;
import {React,Component} from "react";

class StateCounter extends Component {
    
    constructor() {
        super();
        this.state = ({add:3, subtract:2, number:0, fontCount: 20})
    }

    handleClickAdd = () => {
        let temp = this.state.number;
        temp += this.state.add;
        if (temp > 50) {
            return null;
        } else {
            this.setState({number: temp, fontCount: (this.state.fontCount+3)});
        }
        
    }

    handleClickSubtract = () => {
        let temp = this.state.number;
        temp -= this.state.subtract;
        if (temp < -10) {
            return null;
        } else {
            this.setState({number: temp, fontCount: (this.state.fontCount-2)});
        }
    }

    render() {
        return(
            <div className='container'>
                <button className='fs-2 text-bg-light' onClick={this.handleClickAdd} >+</button>
                <button className='fs-2 text-bg-light' onClick={this.handleClickSubtract}>-</button>
                <div  style={{fontSize: this.state.fontCount}}>COUNT: {this.state.number}</div>
            </div>
            
        );
    }
    
}

export default StateCounter;
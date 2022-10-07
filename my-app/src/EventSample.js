import { Component } from "react";
import React from "react";

class EventSample extends Component {
    constructor(){
        super();
        this.counter = 0;
    }

    handleClick = (e) => {
        console.log(this.counter++);
    }

    render(){
        return(
            <React.Fragment>
                <button className="btn btn-outline-dark" onClick={this.handleClick}>+</button>
            </React.Fragment>
        );
    }
}
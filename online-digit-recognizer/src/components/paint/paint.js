import React, { Component } from 'react';
import './paint.css';

class Paint extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const target = e.target;

        if (target.style.background === "black" || target.style.background === "") {
            target.style.background = "white";
        }
        else {
            e.target.style.background = "black";
        }
    }

    render() {
        return (
            <table className="image">
                <tbody>
                    <tr className="table-row" >
                        <th id="0" className="table-header" onClick={this.handleClick} />
                        <th id="1" className="table-header" onClick={this.handleClick} />
                        <th id="2" className="table-header" onClick={this.handleClick} />
                    </tr>
                    <tr className="table-row" >
                        <th id="5" className="table-header" onClick={this.handleClick} />
                        <th id="6" className="table-header" onClick={this.handleClick} />
                        <th id="7" className="table-header" onClick={this.handleClick} />
                    </tr>
                    <tr className="table-row" >
                        <th id="10" className="table-header" onClick={this.handleClick} />
                        <th id="11" className="table-header" onClick={this.handleClick} />
                        <th id="12" className="table-header" onClick={this.handleClick} />
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Paint;

import React, { Component } from 'react';
import './paint.css';

class Paint extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.setupTable = this.setupTable.bind(this);
        this.switchMouseIsDown = this.switchMouseIsDown.bind(this);
    }

    handleClick(e) {
        const target = e.target;
        const hiddenInput2 = document.getElementById("hidden-input2").value;

        if (hiddenInput2 !== target.id && document.getElementById("hidden-input1").value === "true")
            if (target.className === "table-header black") {
                target.className = "table-header white";
            }
            else {
                target.className = "table-header black";
            }
        document.getElementById("hidden-input2").value = target.id;
    }

    switchMouseIsDown() {
        const hiddenInput1 = document.getElementById("hidden-input1").value;

        if (hiddenInput1 === "true") {
            document.getElementById("hidden-input1").value = "false";
        }
        else {
            document.getElementById("hidden-input1").value = "true";
        }
    }

    setupTable(tableLength) {
        let headers = [];
        const tableSize = Math.pow(tableLength, 2);

        for (let i = 0; i < tableSize; i++) {
            headers.push(React.createElement("th", {
                key: i,
                className: "table-header black",
                id: i,
                onMouseMove: this.handleClick,
                onClick: this.switchMouseIsDown
            }));
        }

        const rows = [];

        for (let i = 0; i < tableLength; i++) {
            rows.push(React.createElement("tr", { key: i, className: "table-row" }, headers.slice(i * tableLength, (i + 1) * tableLength)));
        }

        const tbody = React.createElement("tbody", { id: "table-body" }, rows);
        const table = React.createElement("table", { key: "table-main", id: "table-main" }, tbody);
        const hiddenInput1 = React.createElement("input", { key: "hidden-input1", id: "hidden-input1", type: "hidden", value: "false" });
        const hiddenInput2 = React.createElement("input", { key: "hidden-input2", id: "hidden-input2", type: "hidden" });

        const divChildren = [table, hiddenInput1, hiddenInput2];
        const div = React.createElement("div", { id: "table-div" }, divChildren);

        return div;
    }

    render() {
        return this.setupTable(14);
    }
}

export default Paint;

import React, { Component } from 'react';
import './paint.css';

class Paint extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.setupTable = this.setupTable.bind(this);
    }

    handleClick(e) {
        const target = e.target;

        if (target.className === "table-header black") {
            target.className = "table-header white";
        }
        else {
            target.className = "table-header black";
        }
    }

    setupTable(tableLength) {
        let headers = [];
        const tableSize = Math.pow(tableLength, 2);

        for (let i = 0; i < tableSize; i++) {
            headers.push(React.createElement("th", { key: i, className: "table-header black", id: i, onClick: this.handleClick }));
        }

        const rows = [];

        for (let i = 0; i < tableLength; i++) {
            rows.push(React.createElement("tr", { key: i, className: "table-row" }, headers.slice(i * tableLength, (i + 1) * tableLength)));
        }

        const tbody = React.createElement("tbody", { id: "table-body" }, rows);
        const table = React.createElement("table", { id: "table-main" }, tbody);

        return table;
    }

    render() {
        return this.setupTable(14);
    }
}

export default Paint;

import React from 'react';
import ReactDOM from 'react-dom';
import Paint from './../paint';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Paint />, div);
})
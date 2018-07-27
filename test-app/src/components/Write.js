import React, { Component } from 'react';

function write() {
    let fs = require('fs');
    fs.readFile('./test.json', (err, file) => {
        let jsonArray = JSON.parse(file);
        jsonArray.push({
            number2: "newValue"
        });
        fs.writeFile('test.json', JSON.stringify(jsonArray));
    });
}

class Write extends Component {
    render() {
        return (
            <button onClick={write}>Pulsa to test</button>
        )
    }
}

export default Write;
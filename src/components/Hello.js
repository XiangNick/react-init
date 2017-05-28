import React, { Component } from 'react';

export default class Hello extends Component {
    constructor(props, content) {
        super(props, content);
        this.state = {
            hobby : "guiltar"
        }
    }
    render() {
        return (
            <div>
                <h1>Name:{this.props.name}</h1>
                <h2>Age:{this.props.age}</h2>
                <h3>Hobby:{this.state.hobby}</h3>
            </div>
        )
    }
}
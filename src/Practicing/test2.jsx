import React, { Component, createRef } from 'react'
import test1 from './test1'
class test2 extends Component {
    constructor(props) {
        super(props)

        this.inputRef = createRef();
    }

    render() {
        return (
            <div>
                <test1 ref={this.inputRef}></test1>
                <button>focus input</button>
            </div>
        )
    }
}

export default test2

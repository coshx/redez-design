import React, { Component } from 'react';
import './Canvas.css'
import { DropTarget } from 'react-dnd'

let dropSpec = {
    drop: function(props, monitor, component) {
        console.log('dropped!')
    }
}

let collect = function(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

let options = {

}

class Canvas extends Component {

    render() {
        let { connectDropTarget } = this.props
        return connectDropTarget(
            <div className='Canvas'>
            
            </div>
        )
    }
}

export default DropTarget("DesignComponent", dropSpec, collect, options)(Canvas)
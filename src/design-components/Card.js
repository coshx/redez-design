import React, { Component } from 'react'
import './Card.css'
import { DragSource } from 'react-dnd'

let dragSpec = {
    beginDrag: function(props, monitor, component) {
        console.log("began dragging a Card!")
        let item = { id: props.id}
        return item
    },
    isDragging: function(props, monitor) {
        return monitor.getItem().id === props.id
    }
}

let collect = function(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

let options = {

}

class Card extends Component {

    render() {
        let { isDragging, connectDragSource } = this.props
        return connectDragSource(
            <div className='Card'>
                <h1 style={{ textAlign: "center" }}>Card</h1>
            </div>
        )
    }
}

export default DragSource("DesignComponent", dragSpec, collect, options)(Card)
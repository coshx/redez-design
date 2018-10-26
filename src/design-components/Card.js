import React, { Component } from 'react'
import './Card.css'
import { DragSource } from 'react-dnd'
let uuid = require('uuid/v4')

let dragSpec = {
    beginDrag: function (props, monitor, component) {
        let { duplicate, id: oldKey } = props
        let key = duplicate ? uuid() : oldKey
        let item = { view: <DraggableCard id={key} key={key} /> }
        return item
    },
    endDrag: function(props, monitor, component) {
        //todo: delete a card after moving it in the canvas
    }
}

let collect = function (connect, monitor) {
    return {
        connectDragSource: connect.dragSource()
    }
}

class Card extends Component {

    render() {
        let { connectDragSource } = this.props
        return connectDragSource(
            <div className='Card'>
                <h1 style={{ margin: 0, textAlign: "center" }}>Card</h1>
            </div>
        )
    }
}

let DraggableCard = DragSource("DesignComponent", dragSpec, collect)(Card)

export default DraggableCard
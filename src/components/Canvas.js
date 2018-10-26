import React, { Component } from 'react';
import './Canvas.css'
import { DropTarget } from 'react-dnd'

function calculateDropPosition(onPosition) {
    const rack = document.getElementsByClassName('Canvas')[0];
    const rackPosition = rack.getBoundingClientRect();

    const delta = {
        x: onPosition.x - rackPosition.left,
        y: onPosition.y - rackPosition.top
    };

    const position = {
        x: delta.x,
        y: delta.y
    };

    return position;
}

let dropSpec = {
    drop: function (props, monitor, component) {
        let item = monitor.getItem()
        let currentPointerPosition = calculateDropPosition(monitor.getClientOffset())
        let initialPointerOffset = { x: monitor.getInitialClientOffset().x - monitor.getInitialSourceClientOffset().x, y: monitor.getInitialClientOffset().y - monitor.getInitialSourceClientOffset().y }
        let position = { x: currentPointerPosition.x - initialPointerOffset.x, y: currentPointerPosition.y - initialPointerOffset.y }
        let view = item.view
        let views = component.state.views
        let existingView = views.find(val => val.view.key === view.key)
        if (existingView) {
            existingView.position = position
        }
        else {
            //don't add duplicate view
            views.push({view, position})
        }
        component.setState({
            views
        })
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

    constructor(props) {
        super(props)
        this.state = {
            views: []
        }
    }

    render() {
        let { connectDropTarget } = this.props
        return connectDropTarget(
            <div className='Canvas'>
                { this.state.views.map(view => {
                    return (
                        <div key={view.view.key} style={{ margin: '0', position: 'absolute', left: view.position.x, top: view.position.y}}>
                            {view.view}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DropTarget("DesignComponent", dropSpec, collect, options)(Canvas)
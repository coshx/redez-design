import React, { Component } from 'react';
import './Canvas.css'
import { DropTarget } from 'react-dnd'

let dropSpec = {
    drop: function(props, monitor, component) {
        console.log('dropped!')
        let item = monitor.getItem()
        console.log(item)
        let views = component.state.views
        views.push(item.view)
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
                    return view
                })}
            </div>
        )
    }
}

export default DropTarget("DesignComponent", dropSpec, collect, options)(Canvas)
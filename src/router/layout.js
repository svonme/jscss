import { Component, cloneElement, Children } from 'react'
import { Redirect } from 'react-router-dom'

class Layout extends Component {
	constructor(){
		super()
	}
	render(){
    if (this.props.children) {
      return (<div className="layout">
        {
          Children.map(this.props.children, child => child)
        }
      </div>)
    } else {
      return (<Redirect to='/'/>)
    }
	}
}

export default Layout

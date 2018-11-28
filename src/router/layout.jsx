import { Component, Children } from 'react'
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
      // 异常时
      return (<Redirect to='/404'/>)
    }
	}
}

export default Layout

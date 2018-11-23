import { Component } from 'react'

let text = 'hello'
let name = 'svon'

// 定义组件
class Welcome extends React.Component {
  constructor() {
    super()
  }
  componentWillMount () {
  }
  componentDidMount () {
  }
	render() {
    let p = `${text} ${name}`
		return (
      <div className="bg">
        <h1 className="text">{ p }</h1>
      </div>
		)
	}
}


module.exports = Welcome

import { Component } from 'react'

let text = 'hello'
let name = '1122'

// 定义组件
class Welcome extends React.Component {
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

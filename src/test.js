import { Component } from 'react'
import style from './style.scss'

let text = 'hello'
let name = 'svon'

// 定义组件
class Welcome extends React.Component {
	render() {
    let p = `${text} ${name}`
		return (
      <div className="bg">
        <h1 className={ style.text }>{ p }</h1>
      </div>
		)
	}
}

module.exports = Welcome

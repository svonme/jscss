/*
  异步组件
*/
import { Component } from "react"

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      // 异步加载组件
      const { default: component } = await importComponent()
      this.setState({
        component: component
      })
    }
    render() {
      const Comp = this.state.component
      return Comp ? <Comp {...this.props} /> : null
    }
  }

  return AsyncComponent
}

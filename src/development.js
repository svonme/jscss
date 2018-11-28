import App from '@/router/index'
import { Component } from 'react'
import { AppContainer } from 'react-hot-loader'

// 定义组件
class Hot extends Component {
	render() {
		return (
      <AppContainer>
        <App></App>
      </AppContainer>
		)
	}
}

module.exports = Hot

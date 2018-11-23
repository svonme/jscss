import { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Layout from './layout'

const Index = asyncComponent(() => import('@/pages/index'))
const Error404 = asyncComponent(() => import('@/pages/404'))

class Routers extends Component {
	constructor(){
		super()
	}
	render(){
		return (<BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ Index }></Route>
          <Route exact path="/404" component={ Error404 }></Route>
          <Redirect from="/*" to="404"></Redirect>
        </Switch>
      </Layout>
    </BrowserRouter>)
	}
}

export default Routers

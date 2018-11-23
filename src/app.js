import { render } from 'react-dom'

async function getApp () {
  if (process.env.mode === 'development') {
    return import('./development')
  }
  return import('./test')
}

async function onload () {
  const component = await getApp()
  const App = component.default
  const ele = document.querySelector('#app')
  render(<App></App>, ele)
}

setTimeout(onload, 0)

if (module.hot) {
  module.hot.accept(function () {
    console.log('hot')
  })
}

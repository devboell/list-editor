import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './initStore'
import App from './components/App'
import './globalStyles'


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} >
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('main'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}

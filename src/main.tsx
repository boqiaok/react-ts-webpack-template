import * as React from 'react'
import { Provider } from 'mobx-react'
import { hot } from 'react-hot-loader'
import store from './store'
import Router from './router'

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default hot(module)(Main)

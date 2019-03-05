import * as React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
// import Loadable from 'react-loadable'

// import Loading from '@/views/Loading'
// @withRouter
class Loading extends React.Component {
  render() {
    return (
      <>
        <div>sss1</div>
      </>
    )
  }
}

// const HomeAsync = Loadable({
//   loader: () => import('@/views/Home'),
//   loading() {
//     return <Loading />
//   },
// })

// const AboutAsync = Loadable({
//   loader: () => import('@/views/About'),
//   loading() {
//     return <Loading />
//   },
// })

const router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Loading} />
    </Switch>
  </BrowserRouter>
)

export default router

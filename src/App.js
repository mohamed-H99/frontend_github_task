import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Home from './views/Home'
import Error from './views/Error'

import TheNavbar from './components/TheNavbar'
import TheFooter from './components/TheFooter'

function App() {
  return (
    <div className="App">
      <TheNavbar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/404">
            <Error />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
      <TheFooter />
    </div>
  )
}

export default App

import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "./AuthContext"
import Home from "./home"
import Login from "./Login"

class App extends React.Component {
  render() {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        <Router>
          <AuthProvider> 
            <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/" component={Login} /> 
            </Switch>
          </AuthProvider> 
        </Router>
      </div>
    )
  }
}

export default App

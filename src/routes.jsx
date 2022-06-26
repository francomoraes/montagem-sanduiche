import { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import TelaCheckOut from "./components/telas/telaCheckOut";

export default class RootRouter extends Component {
  
  render(){
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/telaCheckOut" component={TelaCheckOut} />
        </Switch>
      </BrowserRouter>
    )
  }
}
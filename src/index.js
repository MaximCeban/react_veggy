import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Details from './product-details'
import Home from './home'


class App extends React.Component {

    render() {


        return (

            <Router>
                <Switch>
                    <Route path="/product/:id" component={Details} />
                    <Route exact path="/" component={Home} />
                </Switch>

            </Router>

        )

    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)

function App2() {
    return (<div>Hello world!</div>)
}
const App3 = () => {
    return (<div>Hello world!</div>)
}
const App4 = () => (<div>Hello world!</div>)

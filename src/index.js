import React from 'react'
import ReactDOM from 'react-dom'
import VeggyItem from './component/itemComponent'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Header from './component/header';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            data: [],
            totalSumm: 0
        }
        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);
    }

    componentDidMount() {
        axios.get(`../mock/products.json`)
            .then(res => {
                const data = res.data.products;
                console.log(data);
                this.setState({ data: data });
            })

    }
    handler(total=0) {
       this.setState({ totalSumm: this.state.totalSumm + total });
    }
    render() {
        return (<div>
            <Header total={this.state.totalSumm}/>
            <br/>
            <Grid container spacing={3}>
                {this.state.data.map(person =>
                    <Grid item xs={3} sm={3}>
                        <VeggyItem
                            action={this.handler}
                            itemId={person.id}
                            quantity='0'
                            imgUrl={person.image}
                            itemName={person.name}
                            price={person.price} />
                    </Grid>)
                }
            </Grid>
        </div>)

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

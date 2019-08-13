import React from 'react'
import VeggyItem from './component/itemComponent'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Header from './component/header';
import SimpleModal from './component/modal';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            showCartModal: false
        }

        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);
        this.onCartClickHandler = this.onCartClickHandler.bind(this);
    }

    componentDidMount() {
        axios.get(`../mock/products.json`)
            .then(res => {
                const data = res.data.products;
                console.log(data);
                this.setState({ data: data });
            })
    }

    updateProductQuantity = (product, quantity) => {
        if (this.state.storedProductQuantity != null) {
            this.state.productsQuantity.set(product, this.state.storedProductQuantity + quantity)
        } else {
            this.state.productsQuantity.set(product, quantity)
        }
    }
    onCartClickHandler(status) {
        this.setState({
            showCartModal: status
        })
    }

    handler(product, quantity) {
        console.log({ product })
        console.log({ quantity })
        const { id: productId } = product
        const { products } = this.state

        this.updateProductQuantity(product, quantity);
        let summ = 0;
        for (const [k, v] of this.state.productsQuantity) {
            summ += k.price * v;
        }
        this.setState(prevState => ({
            products: [...prevState.products, product],
            totalSumm: summ
        }))
    }

    render() {
        console.log('state', this.state)

        return (
            <div>
                
                    <SimpleModal
                        status={this.state.showCartModal}
                        onClose={ () => this.onCartClickHandler(false) }
                        products = {this.state.products}
                        productsQuantity={this.state.productsQuantity}
                    />
                    <Header total={this.state.totalSumm}
                        onCartClickListener={() => this.onCartClickHandler(true)}
                        quantity={this.state.productsQuantity.size} />
                    <br />
                    <Grid container spacing={3}>
                        {this.state.data.map(product =>
                            <Grid item xs={3} sm={3}>
                                <VeggyItem
                                    action={this.handler}
                                    data={product} />
                            </Grid>)
                        }
                    </Grid>
                

            </div>)

    }
}
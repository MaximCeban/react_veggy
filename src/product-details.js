import React from 'react'
import axios from 'axios'

export default class Details extends React.Component {
    constructor(props) {
        super(props)
        const itemId = this.props.match.params.id;
      
        this.state = {
            product: null
        }
    }
    componentDidMount() {
        const { params: { id } } = this.props.match;
        axios.get(`../mock/products.json`)
            .then(res => {
                const data = res.data.products;
                const product = data.find(item => item.id === Number(id));
                console.log(data);
                this.setState({ product: product });
            })
    }
    render() {
        console.log('state', this.props)

        return (<div> it works  </div>)
    }
}

import React from 'react'
import axios from 'axios'
import Grid from "@material-ui/core/Grid";

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

  enableEdit = () => {
    this.setState(prevState => ({
      isEditEnabled: !prevState.isEditEnabled
    }))
  }

  onNameChange = e => {
    this.setState({
      product: {
        ...this.state.product,
        name: e.target.value
      }
    });
  }

  updateProductsState = e => {
    const newProductsState = this.props.products.map(product => {
      return product.id === this.state.product.id
        ? {
          ...product,
          name: e.target.value
        }
        : product
    });

    this.props.updateState("products", newProductsState)
  }
    render() {
        const { product, isEditEnabled } = this.state
    
        return (
          <div>
            {
              !product
                ? <span>Loading</span>
                : (
                  <Grid container justify="flex-start" spacing={ 2 }>
                    <Grid item xs={ 5 }>
                      <img src={ product.image }
                           alt={ product.name }
                           style={{ width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={ 7 }>
                      <input
                        type="text"
                        value={ product.name }
                        disabled={ !isEditEnabled }
                        onChange={ this.onNameChange }
                        onBlur={ this.updateProductsState }
                      />
                      <p>{ product.description }</p>
                      <button onClick={ this.enableEdit }>Edit</button>
                    </Grid>
                  </Grid>
                )
            }
          </div>
        )
      }
}

import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Product from './Product';
import ShoppingCart from 'app/session3/ShoppingCart';
import Loading from 'app/session3/components/Loading';
import SimpleGrid from 'app/session3/components/SimpleGrid';

const URL = 'https://api.predic8.de:443/shop/products/';

class Shop extends React.Component {
  state = {
    numberOfProducts: 0,
    totalPrice: 0,
    products: null
  };

  componentDidMount() {
    axios
      .get(URL)
      .then(this.formatData)
      .then(products => {
        // setTimeout(() => this.setState({ products }), 3000);
        this.setState({ products });
      })
      .catch(e => console.log('Error:', e));
  }

  formatData(data) {
    if (!data) {
      return;
    }
    return data.products.map(product => {
      if (!product.id) {
        // enrich data
        return {
          ...product,
          id: _.uniqueId(),
          price: Math.floor(Math.random() * Math.floor(3000))
        };
      }
      return product;
    });
  }

  updateShoppingCart = (quantity, price) => {
    this.setState(prevState => ({
      numberOfProducts: prevState.numberOfProducts + quantity,
      totalPrice: prevState.totalPrice + quantity * price
    }));
  };

  renderProducts() {
    return !this.state.products ? (
      <Loading />
    ) : (
      this.state.products.map(product => {
        return (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            updateShoppingCart={this.updateShoppingCart}
          />
        );
      })
    );
  }

  render() {
    return (
      <SimpleGrid>
        <ShoppingCart numberOfProducts={this.state.numberOfProducts} totalPrice={this.state.totalPrice} />
        {this.renderProducts()}
      </SimpleGrid>
    );
  }
}

export default Shop;
export { URL as REQUEST_URL };

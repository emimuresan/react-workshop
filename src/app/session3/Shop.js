import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import Loading from './components/Loading';
import SimpleGrid from './components/SimpleGrid';

const URL = 'https://api.predic8.de:443/shop/products/';

/**
 * Homework
 *
 * 1. Make a GET request to the URL above using axios and apply this.formatData to the response.
 * 2. Use conditional rendering to display the Loading component while the data is being fetched and, once the data
 * has loaded, display a Product component for each data item.
 * 3. When a product's quantity is incremented or decremented, update the ShoppingCart.
 * The state properties "numberOfProducts" and "totalPrice" should reflect what the user clicked on.
 *
 * Run unit tests with: `npm test "Session3"`
 */

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfProducts: 0,
      totalPrice: 0,
      products: null
    };

    this.updateShoppingCart = this.updateShoppingCart.bind(this);
  }

  componentDidMount() {
    console.log('Homework point 1');
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

  updateShoppingCart(quantity, price) {
    console.log('Homework point 3');
  }

  renderProducts() {
    console.log('Homework point 2');
    return null;
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

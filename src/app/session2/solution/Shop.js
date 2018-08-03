import React from 'react';
import Product from './Product';
import ShoppingCart from 'app/session2/ShoppingCart';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfProducts: 0,
      totalPrice: 0
    };

    this.updateShoppingCart = this.updateShoppingCart.bind(this);
  }

  updateShoppingCart(increment, price) {
    this.setState(prevState => ({
      numberOfProducts: prevState.numberOfProducts + increment,
      totalPrice: prevState.totalPrice + increment * price
    }));
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Row start="xs">
              <Col xs={6}>
                <ShoppingCart numberOfProducts={this.state.numberOfProducts} totalPrice={this.state.totalPrice} />
                <Product name="Kindle" price={140} updateShoppingCart={this.updateShoppingCart} />
                <Product name="iPhone X" price={800} updateShoppingCart={this.updateShoppingCart} />
                <Product name="Goggle Pixel" price={730} updateShoppingCart={this.updateShoppingCart} />
                <Product name="Samsung Gear" price={340} updateShoppingCart={this.updateShoppingCart} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Shop;

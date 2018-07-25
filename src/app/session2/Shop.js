import React from 'react';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import { Grid, Row, Col } from 'react-flexbox-grid';

/**
 * Homework
 *
 * When a product's quantity is incremented or decremented, update the ShoppingCart.
 * The state properties "numberOfProducts" and "totalPrice" should reflect what the user clicked on.
 */

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfProducts: 0,
      totalPrice: 0
    };
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Row start="xs">
              <Col xs={6}>
                <ShoppingCart totalPrice={this.state.totalPrice} numberOfProducts={this.state.numberOfProducts} />
                <Product name="Kindle" price={140} />
                <Product name="iPhone X" price={800} />
                <Product name="Goggle Pixel" price={730} />
                <Product name="Samsung Gear" price={340} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Shop;

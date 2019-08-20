import React from 'react';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import { Grid, Row, Col } from 'react-flexbox-grid';

/**
 * Exercises
 *
 * When a product's quantity is incremented or decremented, update the ShoppingCart.
 * The state properties "numberOfProducts" and "totalPrice" should reflect what the user clicked on.
 *
 * Run unit tests with: `npm test "Session2"`
 */

class Shop extends React.Component {
  state = {
    numberOfProducts: 0,
    totalPrice: 0
  };

  render() {
    const { totalPrice, numberOfProducts } = this.state;
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Row start="xs">
              <Col xs={6}>
                <ShoppingCart totalPrice={totalPrice} numberOfProducts={numberOfProducts} />
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

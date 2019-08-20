import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

class Product extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.number
  };

  static defaultProps = {
    name: 'Default Product',
    price: 0
  };

  state = {
    quantity: 0
  };

  constructor(props) {
    super(props);

    this.increment = this.updateQuantity.bind(this, 1);
    this.decrement = this.updateQuantity.bind(this, -1);
  }

  updateQuantity(inc) {
    // console.log('quantity before:', this.state.quantity);

    this.setState(
      prevState => ({
        quantity: prevState.quantity + inc
      })
      // callback after state has been updated
      // ,() => {
      //   console.log('quantity after:', this.state.quantity);
      // }
    );
  }

  render() {
    let { name, price } = this.props;

    return (
      <Grid fluid className="product">
        <Row middle="xs">
          <Col xs>
            <h4 className="product__name">{name}</h4>
            <h5 className="product__price">{price} $</h5>
          </Col>
          <Col xs>
            <button className="product__btn-add" onClick={this.increment}>
              {' + '}
            </button>
            <span className="product__quantity">{this.state.quantity}</span>
            <button className="product__btn-remove" onClick={this.decrement}>
              {' - '}
            </button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Product;

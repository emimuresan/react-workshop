import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = ({ numberOfProducts, totalPrice }) => (
  <div className="shopping-cart">
    <p>
      Cart: <b>{numberOfProducts}</b> products
    </p>
    <p>
      Total: <b>{totalPrice}</b> $
    </p>
  </div>
);

ShoppingCart.propTypes = {
  numberOfProducts: PropTypes.number,
  totalPrice: PropTypes.number
};

ShoppingCart.defaultProps = {
  numberOfProducts: 0,
  totalPrice: 0
};

export default ShoppingCart;

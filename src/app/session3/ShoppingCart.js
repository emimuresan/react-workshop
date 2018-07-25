import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component
 * no state!
 * no lifecycle!
 * only props
 */

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
// equivalent code:
// function ShoppingCart(props) {
//   return (
//      <div className="shopping-cart">...
//   );
// }

ShoppingCart.propTypes = {
  numberOfProducts: PropTypes.number,
  totalPrice: PropTypes.number
};

ShoppingCart.defaultProps = {
  numberOfProducts: 0,
  totalPrice: 0
};

export default ShoppingCart;

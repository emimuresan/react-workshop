import React from 'react';
import Shop from './Shop';
import Product from './Product';
// import Shop from './solution/Shop';
// import Product from './solution/Product';
import ShoppingCart from './ShoppingCart';
import { shallow, mount } from 'enzyme';

describe('Session2', () => {
  let shopWrapper;

  /**
   * UNIT TESTS (using shallow render = only render the component, does not render any subcomponents)
   */
  it('should render a shopping cart', () => {
    shopWrapper = shallow(<Shop />);
    expect(shopWrapper.find(ShoppingCart).length).toEqual(1);
  });

  it('should render 4 products', () => {
    shopWrapper = shallow(<Shop />);
    expect(shopWrapper.find(Product).length).toEqual(4);
  });

  /**
   * INTEGRATION TESTS (using mount = renders the component and its subcomponents)
   */

  it('should update the shopping cart if a product is added', () => {
    shopWrapper = mount(<Shop />);
    let buttonsAdd = shopWrapper.find('.product__btn-add');

    buttonsAdd.first().simulate('click');
    expect(shopWrapper.state('numberOfProducts')).toEqual(1);
    expect(shopWrapper.state('totalPrice')).toEqual(140);

    buttonsAdd.first().simulate('click');
    expect(shopWrapper.state('numberOfProducts')).toEqual(2);
    expect(shopWrapper.state('totalPrice')).toEqual(280);
  });

  it('should update the shopping cart if a product is removed', () => {
    shopWrapper = mount(<Shop />);
    let buttonsAdd = shopWrapper.find('.product__btn-add');
    let buttonsRemove = shopWrapper.find('.product__btn-remove');

    buttonsAdd.first().simulate('click');
    buttonsAdd.first().simulate('click');
    buttonsRemove.first().simulate('click');

    expect(shopWrapper.state('numberOfProducts')).toEqual(1);
    expect(shopWrapper.state('totalPrice')).toEqual(140);
  });

  it("should not update the shopping cart if a product's quantity is already at 0", () => {
    shopWrapper = mount(<Shop />);
    let buttonsAdd = shopWrapper.find('.product__btn-add');
    let buttonsRemove = shopWrapper.find('.product__btn-remove');

    expect(shopWrapper.state('numberOfProducts')).toEqual(0);
    expect(shopWrapper.state('totalPrice')).toEqual(0);

    buttonsRemove.first().simulate('click');

    expect(shopWrapper.state('numberOfProducts')).toEqual(0);
    expect(shopWrapper.state('totalPrice')).toEqual(0);
  });
});

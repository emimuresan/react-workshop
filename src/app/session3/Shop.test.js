import React from 'react';
import Shop, { REQUEST_URL } from './Shop';
import Product from './Product';
// import Shop, { REQUEST_URL } from './solution/Shop';
// import Product from './solution/Product';
import ShoppingCart from './ShoppingCart';
import { shallow, mount } from 'enzyme';
import Loading from './components/Loading';
import axios from 'axios';

jest.mock('axios');

describe('Session3: Shop', () => {
  let shopWrapper;
  let mockProducts = [
    { id: 1, price: 300, name: 'Apples' },
    { id: 2, price: 140, name: 'Bananas' },
    { id: 3, price: 250, name: 'Oranges' }
  ];
  let promise;

  beforeEach(() => {
    promise = Promise.resolve({
      products: mockProducts
    });
    axios.get.mockImplementation(() => promise);
  });

  /**
   * UNIT TESTS (using shallow render = only render the component, does not render any subcomponents)
   */
  it('should make a GET request', () => {
    shopWrapper = shallow(<Shop />);
    expect(axios.get).toBeCalledWith(REQUEST_URL);
  });

  it('should render a Shopping Cart component', () => {
    shopWrapper = shallow(<Shop />);
    expect(shopWrapper.find(ShoppingCart).length).toEqual(1);
  });

  it('should render a Loading component', () => {
    shopWrapper = shallow(<Shop />);
    expect(shopWrapper.find(Loading).length).toEqual(1);
  });

  it('should contain 3 products in the state', done => {
    shopWrapper = shallow(<Shop />);

    setImmediate(() => {
      shopWrapper.update();
      expect(shopWrapper.state('products')).toEqual(mockProducts);
      done();
    });
  });

  /**
   * INTEGRATION TESTS (using mount = renders the component and its subcomponents)
   */

  it('should render 3 Product components', done => {
    shopWrapper = shallow(<Shop />);

    setImmediate(() => {
      shopWrapper.update();
      expect(shopWrapper.find(Product).length).toEqual(3);
      done();
    });
  });

  it('should update the shopping cart if a product is added', done => {
    shopWrapper = mount(<Shop />);

    setImmediate(() => {
      shopWrapper.update();
      let buttonsAdd = shopWrapper.find('.product__btn-add');

      buttonsAdd.first().simulate('click');
      expect(shopWrapper.state('numberOfProducts')).toEqual(1);
      expect(shopWrapper.state('totalPrice')).toEqual(300);

      buttonsAdd.first().simulate('click');
      expect(shopWrapper.state('numberOfProducts')).toEqual(2);
      expect(shopWrapper.state('totalPrice')).toEqual(600);
      done();
    });
  });

  it('should update the shopping cart if a product is removed', done => {
    shopWrapper = mount(<Shop />);

    setImmediate(() => {
      shopWrapper.update();
      let buttonsAdd = shopWrapper.find('.product__btn-add');
      let buttonsRemove = shopWrapper.find('.product__btn-remove');

      buttonsAdd.first().simulate('click');
      buttonsAdd.first().simulate('click');
      buttonsRemove.first().simulate('click');

      expect(shopWrapper.state('numberOfProducts')).toEqual(1);
      expect(shopWrapper.state('totalPrice')).toEqual(300);
      done();
    });
  });

  it("should not update the shopping cart if a product's quantity is already at 0", done => {
    shopWrapper = mount(<Shop />);

    setImmediate(() => {
      shopWrapper.update();
      let buttonsRemove = shopWrapper.find('.product__btn-remove');

      expect(shopWrapper.state('numberOfProducts')).toEqual(0);
      expect(shopWrapper.state('totalPrice')).toEqual(0);

      buttonsRemove.first().simulate('click');

      expect(shopWrapper.state('numberOfProducts')).toEqual(0);
      expect(shopWrapper.state('totalPrice')).toEqual(0);
      done();
    });
  });
});

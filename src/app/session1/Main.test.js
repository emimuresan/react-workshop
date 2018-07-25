import React from 'react';
import Main from './Main';
// import Main from './solution/Main';
import getUser from './getUser';
import { shallow } from 'enzyme';

jest.mock('./getUser');

describe('Session1: Main', () => {
  describe('user is logged-in', () => {
    it('should render user name', () => {
      getUser.mockReturnValue({
        name: 'Pennywise',
        isLoggedIn: true,
        age: 25
      });

      const mainComponent = shallow(<Main />);
      let paragraphs = mainComponent.find('p');
      expect(paragraphs.first().text()).toEqual('Name: PENNYWISE');
    });
  });

  describe('user is not logged-in', () => {
    it('should render <Anonymous>', () => {
      getUser.mockReturnValue({
        isLoggedIn: false
      });

      const mainComponent = shallow(<Main />);
      let paragraphs = mainComponent.find('p');
      expect(paragraphs.first().text()).toEqual('Name: Anonymous');
    });
  });

  describe('user age is specified', () => {
    it('should render user age', () => {
      getUser.mockReturnValue({
        name: 'Pennywise',
        isLoggedIn: true,
        age: 25
      });

      const mainComponent = shallow(<Main />);
      const ageParagraph = <p>Age: 25</p>;
      expect(mainComponent.contains(ageParagraph)).toEqual(true);
    });
  });

  describe('user age is not specified', () => {
    it('should render only the user name paragraph', () => {
      getUser.mockReturnValue({
        name: 'Pennywise',
        isLoggedIn: true
      });

      const mainComponent = shallow(<Main />);
      let paragraphs = mainComponent.find('p');
      expect(paragraphs.first().text()).toEqual('Name: PENNYWISE');
      expect(paragraphs).toHaveLength(1);
    });
  });
});

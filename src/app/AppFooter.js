import React, { Component } from 'react';

class AppFooter extends Component {
  render() {
    return (
      <footer className="app-footer">
        <section className="app-footer__section">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="https://reactjs.org/docs/hello-world.html">React Official Docs</a>
            </li>
            <li>
              <a href="https://github.com/facebook/create-react-app">Create React App</a>
            </li>
          </ul>
        </section>

        <section className="app-footer__section">
          <h4>Articles</h4>
          <ul>
            <li>
              <a href="https://medium.freecodecamp.org/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3">
                React's 5 Fingers of Death
              </a>
            </li>
            <li>
              <a href="https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f">
                React Pure Render Performance Anti-patterns
              </a>
            </li>
            <li>
              <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">
                Presentational and Container Components
              </a>
            </li>
          </ul>
        </section>

        <section className="app-footer__section">
          <h4>Videos</h4>
          <ul>
            <li>
              <a href="https://youtu.be/-DX3vJiqxm4">Pete Hunt - The Secrets of React's Virtual DOM</a>
            </li>
            <li>
              <a href="https://youtu.be/xBa0_b-5XDw">Smells In React Apps - JSConf.Asia 2018</a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default AppFooter;

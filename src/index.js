import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
// REPL for React: https://babeljs.io/

let container = document.getElementById('root');

ReactDOM.render(<App />, container);

registerServiceWorker();

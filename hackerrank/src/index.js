import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import register from './registerServiceWorker';
// import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';



ReactDOM.render(<App/>, document.getElementById('root'));
register();

// applyPolyfills().then(() => {
    // defineCustomElements(window);
// })
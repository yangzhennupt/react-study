import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ClickCounter from './demo1/ClickCounter';

ReactDOM.render(
    <ClickCounter initValue= {10} />,
    document.getElementById('root')
);
registerServiceWorker();

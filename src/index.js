import React from 'react';
import { render } from 'react-dom';
import App from './comp/app.js';
require('./sass/hello.scss');

render(<App />, document.getElementById('app'));

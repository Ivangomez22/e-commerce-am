import React from 'react';
import ReactDOM from 'react-dom';

import ReactGA from 'react-ga';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const TRACKING_ID = "214144359"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
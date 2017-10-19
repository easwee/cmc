import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import currencyStore from './stores/currencyStore';

const stores = { currencyStore }; // add more stores if later needed to make them available to all routes

ReactDOM.render(
	(
		<Provider {...stores}>
			<BrowserRouter>
		    	<App />
		  	</BrowserRouter>
	  	</Provider>
  	),
	document.getElementById('root')
);

registerServiceWorker();
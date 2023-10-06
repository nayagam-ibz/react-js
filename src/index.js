import React from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import  { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import 'font-awesome/css/font-awesome.min.css';
import { store } from './helpers';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
	  <App />
	</Provider>
);

reportWebVitals();
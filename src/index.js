import React, {Suspense} from "react";

import ReactDOM from "react-dom";
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i8next';

ReactDOM.render(
  <Suspense fallback={(<div></div>)}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
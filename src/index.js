import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <App /> {/*componente principal que va a renderizar a los demas */}
  </React.StrictMode>,
  document.getElementById('root')
);


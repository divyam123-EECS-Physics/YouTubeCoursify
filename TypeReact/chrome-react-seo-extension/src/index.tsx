import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MemoryRouter, BrowserRouter} from 'react-router-dom';

// TODO: Pages are currently not "linked", extension page and options page are seperate
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MemoryRouter>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    </MemoryRouter>
  </React.StrictMode>
);

// TODO: if make changes, run npm build and take out "npm install @mui/icons-material"
// then run agian & place code backa nd  re-load into chrome
// source: https://blog.logrocket.com/creating-chrome-extension-react-typescript/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

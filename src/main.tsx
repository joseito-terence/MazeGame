import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@/App';

import 'modern-normalize';
import './main.css';
import Countdown from 'react-countdown';

const dat=Date.now() + 80000;

ReactDOM.render(
  <React.StrictMode>
    <App targetTime={dat} />
    </React.StrictMode>
  ,
  document.getElementById('root'),
);

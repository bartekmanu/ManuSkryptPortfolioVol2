import React from 'react';
import ReactDOM from 'react-dom';

import Desktop from "./components/body/body.jsx";

require('../sass/style.sass');

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <Desktop />,
    document.getElementById('app')
  );
});
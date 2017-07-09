import React from 'react';
import ReactDOM from 'react-dom';
require('../sass/style.sass');

import Desktop from "./components/Body/body.jsx";

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <Desktop />,
    document.getElementById('app')
  );
});
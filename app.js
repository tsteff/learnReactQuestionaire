import React from 'react';
import MainApp from './components/MainApp';
require("./style.css");
require("./libs/mousetrap.min.js");

React.render(
   <MainApp />,
 document.getElementById('content')
);

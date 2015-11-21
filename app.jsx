import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

import AppRoutes from './app-routes.jsx';
import { render } from 'react-dom';
import $ from 'jquery';

$(function(){
    render(AppRoutes, document.getElementById('container'));
})

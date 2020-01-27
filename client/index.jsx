import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Welcome } from 'Components/Welcome';

ReactDOM.render(
    <BrowserRouter>
        <Welcome />
    </BrowserRouter>
    ,
	document.getElementById('main')
);
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Welcome } from 'Components/Welcome';

ReactDOM.render(
    <Welcome examplePropForRyan="POOSEY" />,
	document.getElementById('main')
);
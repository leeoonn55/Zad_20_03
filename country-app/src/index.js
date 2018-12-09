import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import { getCountries } from '../src/actions/actions-countries';



render(

    <Provider store={store}>
        <div>
            <DevTools />
            <h1>Hi there ;)</h1>
        </div>
    </Provider>,
    document.getElementById('root')


);
store.dispatch(getCountries());
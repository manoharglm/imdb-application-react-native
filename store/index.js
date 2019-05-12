import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers'

const initialState = {}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
    );
    // console.log('getting store', store.getState())

    store.subscribe(() => {
        // console.log(store.getState())
    })
export default store;
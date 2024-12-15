import RootReducers from "./reducers/Index";
import {createStore} from 'redux';

const store = createStore(RootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
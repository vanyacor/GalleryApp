import { photosReducer } from './reducers/photosReducer';
import thunkMiddleware from 'redux-thunk';
import { FullSizePhotoScreenReduecer } from './reducers/FullSizePhotoScreenReduecer';

const { combineReducers, createStore, compose, applyMiddleware } = require("redux");



const rootReducer = combineReducers({
    photosPage: photosReducer,
    FullSizePhotoPage: FullSizePhotoScreenReduecer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));
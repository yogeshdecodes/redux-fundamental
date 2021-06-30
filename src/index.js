import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  compose(applyMiddleware(thunk)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*************************************************************************************************************/
// //Redux implementation without using react-redux Hooks
// //UI dispatch action-> reducer update store -> UI subscribe to store

// //STORE - Global state
// const initialState = {
//   count: 0,
// };

// //ACTION - object
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   };
// };

// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   };
// };

// //REDUCER - pure function
// const counter = (state = initialState.count, { type, payload }) => {
//   switch (type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// //create redux store
// let store = createStore(counter);

// //Subscribe to store - imp should be above dispatch
// store.subscribe(() => console.log(store.getState()));

// //Dispatch action to reducer
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

/*************************************************************************************************************/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducers';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();

// import {createStore } from 'redux';

// function playList(state = [], action) {
//   if(action.type === 'ADD_TRUCK') {
//     return [
//       ...state,
//       action.payload
//     ]
//   }
//   return state;
// }

// const store = createStore(playList);


// const addTruckButton = document.querySelectorAll('.addTruck')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];

// store.subscribe(() => {

//   list.innerHTML = ""
//   trackInput.value = ''
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li)
//   })
// })


// addTruckButton.addEventListener('click', () => {
//   const trackName = document.querySelectorAll('.trackInput')[0].value
//   store.dispatch({type: 'ADD_TRUCK', payload: trackName});
// })

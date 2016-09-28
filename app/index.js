// react
import React from 'react';
import { render } from 'react-dom';

// redux
import { createStore, combineReducers } from 'redux';

//reducers
import { Counter, Todo } from './reducers';

// react redux
import { Provider } from 'react-redux';

// application root
import App from './components/App';

const reducer = combineReducers({
  counter: Counter,
  todo: Todo
});

// for dev tools: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
const store = createStore(reducer, window.devToolsExtension ? window.devToolsExtension() : (f) => f);

render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
  ,
  document.getElementById('app')
);

import React from 'react';
import { Provider } from 'react-redux';
import { MyRoutes, store } from '../config';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <MyRoutes/>
    </Provider>
    
  );
}

export default App;

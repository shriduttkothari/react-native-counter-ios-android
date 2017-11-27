
import Counter from './containers/Counter'
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';

const store = configureStore();
class App extends Component {
    constructor(){
        super()
    }

    render() {
    return (
     <Provider store={store}>
        <Counter />
     </Provider>
        
     
    );
  }

}

export default App;
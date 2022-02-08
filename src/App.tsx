import React from 'react'
import './App.css'
import MyTable from './components/userTable'
import DivBlinker from './components/divBlinker'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {Provider} from "react-redux"
import storage from './redux'
import {ReduxCounter} from './components/reduxCounter'
import {SwitchTheme} from './components/switchTheme';
import {UseReducerHook} from './components/useReducer';

function App(): JSX.Element { 
  return (
    <Provider store = {storage}>
    <div className="App">
        <SwitchTheme/>
        <h1>Redux and React Hooks</h1>
        <h2>User Table With Redux</h2>
        <MyTable/>
        <h2>Shuffle Colors</h2>
        <DivBlinker/>
        <h2>Counter With Redux</h2>
        <ReduxCounter/>
        <h2>Type color name to change border (useReducerHook)</h2>
        <UseReducerHook/>
    </div>
    </Provider>
  );
}

export default App;

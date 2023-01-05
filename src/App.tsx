import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

const App = () => {

    const shapka = 'What to learn'

    return (
        <div className="App">
            <Todolist shapka={shapka}/>
            <Todolist shapka={'What to learn 2222'} />
        </div>
    );
}

export default App;

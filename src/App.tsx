import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

const App = () => {

    const shapka = 'What to learn'

    const tasks1 = [
        {id: 1, title: 'HTML $ CSS', isDone: true},
        {id: 2, title: 'JavaScript', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'ReactJS', isDone: false},
        {id: 5, title: 'ReactJS', isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: 'Hello World', isDone: true},
        {id: 2, title: 'I am happy', isDone: false},
        {id: 3, title: 'Fuck', isDone: false}
    ]

    return (
        <div className="App">
            <Todolist title={shapka} tasks={tasks1}/>
            <Todolist title={'What to learn 2222'} tasks={tasks2}/>
        </div>
    );
}

export default App;

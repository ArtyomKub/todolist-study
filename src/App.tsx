import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterButtonType = 'Active' | 'Completed' | 'All'

const App = () => {

    let [tasks1, setTasks] = useState([
        {id: 1, title: 'HTML $ CSS', isDone: true},
        {id: 2, title: 'JavaScript', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'ReactJS', isDone: false},
        {id: 5, title: 'ReactJS', isDone: false}
    ])

    const removeTask = (taskID: number) => {
        setTasks(tasks1.filter(el => el.id !== taskID))
    }

    let [filterButtonName, setFilterButtonName] = useState<FilterButtonType>('All')
    let durshlak = tasks1;
    if (filterButtonName === 'Active') {
        durshlak = tasks1.filter((el) => !el.isDone)
    }
    if (filterButtonName === 'Completed') {
        durshlak = tasks1.filter((el) => el.isDone)
    }

    const filteredCurrentTasks = (buttonName: FilterButtonType) => {
        setFilterButtonName(buttonName)
    }


    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={durshlak}
                      removeTask={removeTask}
                      filteredCurrentTasks={filteredCurrentTasks}/>
        </div>
    );
}

export default App;

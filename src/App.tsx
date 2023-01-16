import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValuesType = 'Active' | 'Completed' | 'All'

const App = () => {

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML $ CSS', isDone: true},
        {id: 2, title: 'JavaScript', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'ReactJS', isDone: false},
        {id: 5, title: 'ReactJS', isDone: false}
    ])

    const removeTask = (id: number) => {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>('All');
    let tasksForTodolist = tasks;

    if (filter === 'Active') {
        tasksForTodolist = tasks.filter((t) => t.isDone === false);
    }
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter((t) => t.isDone === true);
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }


    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;

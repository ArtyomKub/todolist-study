import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";


export type FilterValuesType = 'Active' | 'Completed' | 'All'

const App = () => {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML $ CSS', isDone: true},
        {id: v1(), title: 'JavaScript', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'ReactJS', isDone: false}
    ])

    const addTask = (inputValue:string) => {
        const newTask = {id: v1(), title: inputValue, isDone: false}
        setTasks([newTask, ...tasks])

    }

    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>('All');
    let tasksForTodolist = tasks;

    if (filter === 'Active') {
        tasksForTodolist = tasks.filter((t) => !t.isDone);
    }
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter((t) => t.isDone);
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
                      // addTask={addTask}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;

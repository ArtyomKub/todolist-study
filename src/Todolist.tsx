import React, {useState} from "react";
import {FilterButtonType} from "./App";

type TodolistPropsType = {
    title?: string
    tasks: Array<TasksType>
    removeTask: (taskID: number) => void
    // filteredCurrentTasks: (buttonName: FilterButtonType) => void
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {

    let [filterButtonName, setFilterButtonName] = useState<FilterButtonType>('All')
    let durshlak = props.tasks;
    if (filterButtonName === 'Active') {
        durshlak = props.tasks.filter((el) => !el.isDone)
    }
    if (filterButtonName === 'Completed') {
        durshlak = props.tasks.filter((el) => el.isDone)
    }

    const filteredCurrentTasks = (buttonName: FilterButtonType) => {
        setFilterButtonName(buttonName)
    }

    return (
        <div className='App-content'>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {durshlak.map((el) => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => props.removeTask(el.id)}>X</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => filteredCurrentTasks('All')}>All</button>
                <button onClick={() => filteredCurrentTasks('Active')}>Active</button>
                <button onClick={() => filteredCurrentTasks('Completed')}>Completed</button>
            </div>
        </div>
    )
}

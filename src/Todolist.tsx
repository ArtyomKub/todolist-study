import React from "react";
import {FilterButtonType} from "./App";

type TodolistPropsType = {
    title?: string
    tasks: Array<TasksType>
    removeTask: (taskID: number) => void
    filteredCurrentTasks: (buttonName: FilterButtonType) => void
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div className='App-content'>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {
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
                <button onClick={() => props.filteredCurrentTasks('All')}>All</button>
                <button onClick={() => props.filteredCurrentTasks('Active')}>Active</button>
                <button onClick={() => props.filteredCurrentTasks('Completed')}>Completed</button>
            </div>
        </div>
    )
}

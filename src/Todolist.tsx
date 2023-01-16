import React from "react";
import {FilterValuesType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export const Todolist = (props: PropsType) => {

    return (
        <div className='App-content'>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button onClick={() => {
                }}>+
                </button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li key={t.id}>
                            <button onClick={() => props.removeTask(t.id)}>X</button>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.changeFilter('All')}>All</button>
                <button onClick={() => props.changeFilter('Active')}>Active</button>
                <button onClick={() => props.changeFilter('Completed')}>Completed</button>
            </div>
        </div>
    )
}

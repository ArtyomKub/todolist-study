import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (inputValue: string) => void
}

export const Todolist = (props: PropsType) => {

    let [inputValue, setInputValue] = useState('')
    const addTaskHandler = () => {
        props.addTask(inputValue)
        setInputValue('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }
    const removeTaskHandler = (tId: string) => {
        props.removeTask(tId)
    }

    const changeFilterButton = (value: FilterValuesType) => {
        props.changeFilter(value)
    }


    return (
        <div className='App-content'>
            <h3>{props.title}</h3>
            <div>
                <input value={inputValue} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                        return (
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone}/>
                                <button onClick={() => removeTaskHandler(t.id)}>x</button>
                                <span>{t.title}</span>
                            </li>
                        )
                    }
                )}
            </ul>
            <div>
                <button onClick={() => changeFilterButton('All')}>All</button>
                <button onClick={() => changeFilterButton('Active')}>Active</button>
                <button onClick={() => changeFilterButton('Completed')}>Completed</button>
            </div>
        </div>
    )
}

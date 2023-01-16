import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (inputValue:string) => void
}

// type InputPropsType = {
//     setTitle: (title:string) => void
//     title: string
// }

export const Todolist = (props: PropsType) => {


    // const Input = (props: InputPropsType)=> {
    //     const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)=> {props.setTitle(event.currentTarget.value)}
    // }

    let [inputValue, setInputValue] = useState('')
    console.log(inputValue)

    return (
        <div className='App-content'>
            <h3>{props.title}</h3>
            <div>
                <input onChange={(event) => {setInputValue(event.currentTarget.value)}}/>


                <button onClick={(event) => {props.addTask(inputValue)}}>+</button>


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

import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";
import {Button} from "./components/Button/Button";


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
    checkBoxChange: (id: string, checkedValue: boolean) => void
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
                <Button name={'+'} callback={addTaskHandler}/>
            </div>
            <ul>
                {props.tasks.map((t) => {
                        const onClickHandler = () => {
                            return (
                                removeTaskHandler(t.id)
                            )
                        }
                        const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
                            return (
                                props.checkBoxChange(t.id, event.currentTarget.checked)
                            )
                        }

                        return (
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
                                <Button name={'x'} callback={onClickHandler}/>
                                <span>{t.title}</span>
                            </li>
                        )
                    }
                )}
            </ul>
            <div>
                <Button name={'All'} callback={() => {
                    changeFilterButton('All')
                }}/>
                <Button name={'Active'} callback={() => {
                    changeFilterButton('Active')
                }}/>
                <Button name={'Completed'} callback={() => {
                    changeFilterButton('Completed')
                }}/>
            </div>
        </div>
    )
}

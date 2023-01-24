import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";
import {Button} from "./components/Button/Button";
import styles from './Todolist.module.css'


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

    let [inputValue, setInputValue] = useState<string>('')
    let [error, setError] = useState<string | null>(null)
    let [buttonName, setButtonName] = useState<FilterValuesType>('All')

    const addTaskHandler = () => {
        if (inputValue.trim()) {
            props.addTask(inputValue.trim())
            setInputValue('')
        } else {
            setError('Title is required')
        }
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(null)
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
                <input value={inputValue}
                       className={error ? styles.error : ''}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}
                />
                <Button name={'+'} callback={addTaskHandler}/>
            </div>
            {error && <div className={styles.errorMessage}>{error}</div>}
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
                <Button className={buttonName === 'All' ? styles.activeFilter : ''} name={'All'} callback={() => {changeFilterButton('All')}}/>
                <Button className={buttonName === 'Active' ? styles.activeFilter : ''} name={'Active'} callback={() => {changeFilterButton('Active')}}/>
                <Button className={buttonName === 'Completed' ? styles.activeFilter : ''} name={'Completed'} callback={() => {changeFilterButton('Completed')}}/>
            </div>
        </div>
    )
}

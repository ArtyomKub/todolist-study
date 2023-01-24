import React, {useState} from 'react';
import styles from '../../Todolist.module.css'
import {FilterValuesType} from "../../App";

type PropsType = {
    name: string
    callback: () => void
    activeFilter?: 'Active' | 'Completed' | 'All'
    className?:any
}

export const Button = (props: PropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
            <button className={props.name === props.activeFilter ? styles.activeFilter : ''} onClick={onClickHandler}>{props.name}</button>
    );
};


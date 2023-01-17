// rcc
import React from 'react';
import styles from './Button.module.css';

export default function SuperButton(props) {
    return (
        <div className={styles.main}> {props.name}</div>
    )
};
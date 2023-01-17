import React from 'react';
import styles from './NiceButton.module.css';

export default function NiceButton(props) {
    return (
        <div className={styles.main}>
            {props.buttonname}
        </div>
    );
}
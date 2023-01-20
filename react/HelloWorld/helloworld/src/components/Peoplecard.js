import React from 'react';
import styles from './Peoplecard.module.css';

export default function Peoplecard(props) {
    return (
        <div className={styles.main}>
            <img src={props.src} width="150px" height="150px" />
            <h4>{props.name}</h4>
            <p>{props.smalltext}</p>
        </div>
    );
}
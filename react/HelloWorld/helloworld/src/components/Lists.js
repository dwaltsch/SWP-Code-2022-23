import React from 'react';
import styles from './Lists.module.css';

export default function Lists(props) {
    return (
        <div className={styles.main}>
            <ul>{props.listItem}</ul>
        </div>
    );
}
// rcc
import React, {useState} from 'react';
import styles from './Button.module.css';

export default function SuperButton(props) {
    const [isOn, setIsOn] = useState();
    return (
        <div
            className={isOn ? styles.isOn : styles.isOff}
            onClick={() => {
                alert(`Hello ${props.name}! You are ${props.age} years old.`);
                setIsOn(!isOn);
            }}
        >
            {props.name} ist {props.age} alt und ist {isOn ? "On" : "off"}</div>
    )
};
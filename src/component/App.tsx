import {useState} from "react";
import styles from './App.module.scss'

export const App = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>{count}</p>
            <button className={styles.button} onClick={increment}></button>
        </div>
    );
}
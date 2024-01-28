import { useState } from "react";
import styles from './form.module.css'
export default function Form({ setTodos, todos }) {
    // const [todo, setTodo] = useState("")
    const [todo, setTodo] = useState({ name: "", done: false });

    function handleSubmit(e) {
        e.preventDefault(); //preventDefault() is used to prevent privius data, when click on button page get refresh so to avoide that refresh we use preventDefault()
        setTodos([...todos, todo]);
        setTodo({ name: "", done: false });
    }
    return (
        <div>
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <input className={styles.modernInput} type="text" value={todo.name}
                    onChange={(e) => setTodo({ name: e.target.value, done: false })} placeholder="Enter Todo Item" />
                <button type="submit" className={styles.modernButton}>Add</button>
            </form>
        </div>
    )
}
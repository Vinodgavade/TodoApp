import styles from './todoitem.module.css'
export default function TodoItem({ item, todos, setTodos }) {

    function handleDelete(item) {
        console.log("delete item", item)
        setTodos(todos.filter((todo) => todo !== item))

    }

    function handleClick(name) {
        // const newArray = todos.map((todo) =>
        //     todo.name === name ? { ...todo, done: !todo.done } : todo)
        // setTodos(newArray)

        //OR
        setTodos(todos.map((todo) =>
            todo.name === name ? { ...todo, done: !todo.done } : todo))
    }
    const classname = item.done ? styles.completed : "";
    return (
        <div className={styles.item}>
            <div className={styles.itemname}>
                <span className={classname} onClick={() => handleClick(item.name)}> {item.name}</span>

                <span>
                    <button onClick={() => handleDelete(item)}
                        className={styles.delete}>X</button>
                </span>
            </div >

            <hr className={styles.line} />
        </div>
    )
}
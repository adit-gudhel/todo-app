import React, { useState, useEffect } from "react"
import { FaTrash } from "react-icons/fa"
import styles from "./TodoItem.module.css"

const TodoItem = props => {

    const [editing, setEditing] = useState(false)

    const handleEdit = () => {
        setEditing(true)
    }

    const handleUpdateDone = e => {
        if(e.key === "Enter") {
            setEditing(false)
        }
    }

    const { id, completed, title } = props.todo
        
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}

    if(editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    useEffect(() => {
        return () => {
          console.log("Cleaning up...")
        }
    }, [])

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEdit} style={viewMode}>
                <input 
                    type="checkbox" 
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}     
                /> 
                <button onClick={() => props.deleteTodoProps(id)}>
                    <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
                </button> 
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input 
                type="text"
                name="title" 
                className={styles.textInput} 
                style={editMode} 
                value={title} 
                onChange={(e) => {
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdateDone}    
            />
        </li>
    )
}

export default TodoItem
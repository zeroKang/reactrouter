import React from 'react'
import {useHistory} from "react-router-dom";


const TodoInput = () => {

    let history = useHistory()

    const handleClick = () => {
        alert("SAVED")
        history.push("/todo/list/1")
    }

    return (
        <div>
            <h4>Todo Input</h4>
            <button onClick={handleClick}>SAVE</button>
        </div>
    )
}
export default TodoInput
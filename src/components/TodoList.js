import React, {useEffect, useState} from 'react'

import {useParams, Link, useRouteMatch } from "react-router-dom";
import axios from 'axios';
import TodoListDetail from './TodoListDetail';

let loaded = false

const TodoList = () => {

    let {page} = useParams()

    let match = useRouteMatch()

    const [todos, setTodos] = useState([])

    console.log("TodoList..." , match )
    loaded = false

    useEffect(() => {
        
        if(loaded){
            return
        }
        
        axios.get("http://localhost:8080/todos/list?page=" + page).then(res => {
            console.log(res)
            setTodos(res.data.content)
            loaded = true
        })

    })

    return(
        <div>
            <h4>Todo List </h4>
            
            <TodoListDetail arr = {todos}></TodoListDetail>
            
            <Link to={`${parseInt(page) + 1}`}>NEXT</Link>
        </div>
    )
}
export default  TodoList

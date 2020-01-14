import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

import axios from 'axios'


const TodoPage = () => {

    console.log("Todo Page..............................")

    let match = useRouteMatch();

    console.log("Todo Page---------",match)

    return(
        <div className='page-wrapper'>
            <h3>Todo Page</h3>
            <ul>
                <li>
                <Link to={`${match.url}/input`}>TodoInput</Link>
                </li>
                <li>
                <Link to={`${match.url}/list/1`}>TodoList</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/input`}>
                <TodoInput></TodoInput>
                </Route>
                <Route path={`${match.path}/list/:page`}>
                <TodoList ></TodoList>
                </Route>
            </Switch>
        </div>
    )

}
export default TodoPage

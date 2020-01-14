import React from 'react'


const TodoListDetail  = ({arr}) => {

    return(
        <ul>
          {arr.map(t => <li key={t.tno}> {t.tno} - {t.title}</li>)}
        </ul>
    )
}
export default TodoListDetail
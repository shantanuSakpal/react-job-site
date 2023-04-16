import React from 'react'
import { Todo } from "./Todo"
export const Todos = (props) => {
    return (
        <div className='container'>
            <h3 className='my-3'>My List:</h3>
            {props.todolist.length === 0 ? "No Tasks to do, keep it up !" :
                props.todolist.map((todoItem) => {
                    return <Todo todoItem={todoItem} key={todoItem.srNo} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}

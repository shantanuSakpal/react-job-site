import React from 'react'

export const Todo = ({ todoItem, onDelete }) => {
    return (
        <div className='container my-3'>
            {/* <h3>{todoItem.srNo}</h3> */}
            <h5>{todoItem.srNo}. {todoItem.title}</h5>
            <p>{todoItem.desc}</p>
            <button onClick={() => { onDelete(todoItem) }} className="btn btn-sm btn-danger">DELETE</button>
            <hr />
        </div>
    )
}

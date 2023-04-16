import React, { useState } from 'react'

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) { alert("no blanks !"); }
        else {
            addTodo(title, desc);
        }
    }
    return (
        <div className='container'>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label h5"> Task title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" aria-describedby="title" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label h5">Task Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => { setDesc(e.target.value) }} id="desc" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Add</button>
            </form>
        </div>
    )
}

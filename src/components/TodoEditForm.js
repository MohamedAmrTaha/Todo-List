import {React, useState} from 'react';

const TodoEditForm = ({editTodo,task}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value,task.id);
    }
    const [value, setValue] = useState(task.task);
    return ( <form className="TodoForm" onSubmit={handleSubmit}>
    <input type="text" value={value} className="todo-input" placeholder="Update Task" onChange={e=>setValue(e.target.value)}/>
    <button className="todo-btn" type="submit">Update Task</button>
    </form> );
}
 
export default TodoEditForm;
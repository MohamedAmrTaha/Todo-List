import React, {useState} from 'react';

const TodoForm = ({addTodo}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask("");
    }
    const [task, setTask] = useState("");
    return ( <form className="TodoForm" onSubmit={handleSubmit}>
    <input type="text" value={task} className="todo-input" placeholder="What is the task today?" onChange={e=>setTask(e.target.value)}/>
    <button className="todo-btn" type="submit">Add Task</button>
    </form> );
}
 
export default TodoForm;
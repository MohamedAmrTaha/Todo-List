import TodoForm from "./TodoForm";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import TodoEditForm from "./TodoEditForm";
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    }
    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            })
        );
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const editTodo = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, isEditing: !todo.isEditing};
                }
                return todo;
            })
        );
    }
    const updateTodo = (value, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, task: value, isEditing: !todo.isEditing};
                }
                return todo;
            })
        );
    }
    return ( <div className="TodoWrapper">
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo,index) => (
            (todo.isEditing) ? <TodoEditForm editTodo={updateTodo} task={todo} key={index} /> : 
            <Todo toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} key={index} task={todo} />
        ))}
        </div> );
}
 
export default TodoWrapper;
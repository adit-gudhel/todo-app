import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4} from "uuid"
import TodosList from "./TodosList"
import Header from "./Header"
import Navbar from "./Navbar"
import InputTodo from "./InputTodo"
import About from "../../functionBased/pages/About"
import NoMatch from "../../functionBased/pages/NoMatch"

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos())

    const handleChange = id => {
        setTodos(prevState => 
            prevState.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }

                return todo
            })
        )
    }

    const deleteTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            })
        ])
    }

    const addTodo = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }

        setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.title = updatedTitle
            }

            return todo
        }))
    }

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }   

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div className="container">
                        <div className="inner">
                        <Header />
                            <InputTodo addTodoProps={addTodo} />
                            <TodosList 
                                todos={todos} 
                                handleChangeProps={handleChange}
                                deleteTodoProps={deleteTodo} 
                                setUpdate={setUpdate}   
                            />
                        </div>
                    </div>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </>
    )

}

export default TodoContainer
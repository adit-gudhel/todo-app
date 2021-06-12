import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid"

const TodosContext = React.createContext()
const TodosProvider = TodosContext.Provider
const TodosConsumer = TodosContext.Consumer

class MyContext extends Component {

    state = {
        todos: [{
            id: uuidv4,
            title: "Test context",
            completed: false
        }]
    }

    render() {
        return (
            <TodosProvider value={{...this.state}}>
                {this.props.children}
            </TodosProvider>
        )
    }
}

export { TodosContext, MyContext, TodosConsumer }

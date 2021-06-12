import React from "react"
import reactDom from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
// import { MyContext } from "./context";

// Component
import TodoContainer from "./functionBased/components/TodoContainer"
// import TodoContainer from "./classBased/components/TodoContainer"

// Stylesheet
import "./functionBased/App.css"
// import "./classBased/App.css"

reactDom.render(
    <React.StrictMode>
        {/* <MyContext> */}
        <Router>
            <TodoContainer />
        </Router>
        {/* </MyContext> */}
    </React.StrictMode>, 
    document.getElementById("root")
)
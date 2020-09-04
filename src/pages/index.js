import React from "react"
import { Link } from "gatsby" // Link from gatsby should be preferred over @reach/router
// import { TransitionGroup, CSSTransition } from "react-transition-group"
// import "./main.css"

const App = () => (
  <div className="app">
    <nav className="nav">
      <Link to="page/1">Page 1</Link> <Link to="page/2">Page 2</Link>
      {` `}
      <Link to="page/3">Page 3</Link> <Link to="page/4">Page 4</Link>
    </nav>
  </div>
)

export default App

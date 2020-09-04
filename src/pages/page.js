import React from "react"
import { Router, Location } from "@reach/router"

const Page = () => (
  <FadeTransitionRouter>
    <PageTemplate path="/page/:page" />
  </FadeTransitionRouter>
)

const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => (
      <Router location={location} className="router">
        {props.children}
      </Router>
    )}
  </Location>
)

const PageTemplate = props => (
  <div
    className="page"
    style={{ background: `hsl(${props.page * 75}, 60%, 60%)` }}
  >
    {props.page}
  </div>
)

export default Page

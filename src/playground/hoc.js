// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react"
import ReactDOM from "react-dom"

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

// HOC
const withAdminWarning = WrappedComponent => {
  // Pass the props object down to to Wrapped Component
  // using Spread Operators
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {!props.isAuthenticated && <p>User is not authenticated. Please sign in</p>}
      {props.isAuthenticated && <WrappedComponent {...props} />}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="These are the details" />,
//   document.getElementById("app")
// )

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="These are the details" />,
  document.getElementById("app")
)

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom"
import "./styles/styles.scss"
import "normalize.css/normalize.css"

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
)

const AddExpensePage = () => <div>This is from my add expense component</div>
const EditExpensePage = () => <div>This is from my edit expense component</div>
const HelpPage = () => <div>This is from my help page component</div>

const NotFoundPage = () => (
  <div>
    Error 404! Page not found <Link to="/">Go Home</Link>
  </div>
)

// Header with titel and Navigation
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active" exact={true}>
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active" exact={true}>
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active" exact={true}>
      Help
    </NavLink>
  </header>
)

// Pages for the website
// Header added for every page
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"))

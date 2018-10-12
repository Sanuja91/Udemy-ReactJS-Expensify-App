import React from "react"
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"
import AddExpensePage from "../components/AddExpensePage"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import EditExpensePage from "../components/EditExpensePage"
import HelpPage from "../components/HelpPage"
import NotFoundPage from "../components/NotFoundPage"

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
    <NavLink to="/help" activeClassName="is-active" exact={true}>
      Help
    </NavLink>
  </header>
)

// Pages for the website
// Header added for every page
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

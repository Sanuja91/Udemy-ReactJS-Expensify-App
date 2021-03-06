import React from "react"
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"
import AddExpensePage from "../components/AddExpensePage"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import EditExpensePage from "../components/EditExpensePage"
import HelpPage from "../components/HelpPage"
import NotFoundPage from "../components/NotFoundPage"
import Header from "../components/Header"



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

import * as React from 'react'
import { Container } from 'reactstrap'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'
import { AdminPage } from './pages/AdminPage'
import { ErrorPage } from './pages/ErrorPage'

export const AppComponent: React.FC = () => {
    return <Container fluid>
        <Router>
            <Switch>
                <Route path="/">
                    <AdminPage></AdminPage>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </Router>
    </Container>
}
import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ErrorPage } from './ErrorPage'
import { Col } from 'reactstrap'
import { Sidebar } from '../sidebar/Sidebar'
import { Test } from './Test'

export const AdminPage: React.FC = ()=>{
    
    return <div className="row page">
        <Col className="col sidebar">
            <Sidebar/>
        </Col>
        <Col>
            <Switch>
                <Route exact path={'/'}>
                    <h1>Home</h1>
                </Route>
                <Route exact path="/test">
                    <Test/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </Col>
    </div>

}
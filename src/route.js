import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from '../src/component/Dashboard/Dashboard'
import Wizard from '../src/component/Wizard/Wizard'

export default(
    <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/wizard' component={Wizard}/>
    </Switch>
)
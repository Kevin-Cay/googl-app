import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Response } from './Response'

export const Routes = () => {
    return (
        <div className="p-4">
            <Switch>
                <Route exact path='/' >
                    <Redirect to='/search' />
                </Route>
                <Route path={['/search', '/images', '/news', '/videos' ]} >
                    <Response />
                </Route>
            </Switch>
        </div>
    )
}

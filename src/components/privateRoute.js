import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

var PrivateRoute = (props) => (
    <Route {...props.routeProps} render={() => (
        props.loggedIn ? (
            <div>{props.component}</div>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }} />
        )
    )} />
)

const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: localStorage.token ? true : false,
        location: ownProps.path,
        routeProps: {
            exact: ownProps.exact,
            path: ownProps.path
        }
    }
}

export default PrivateRoute = connect(mapStateToProps)(PrivateRoute)

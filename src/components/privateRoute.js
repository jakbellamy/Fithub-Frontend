import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = (props) => {
    <Route {...props.routeProps} render={() => {
        if(props.loggedIn){
            <div>{props.children}</div>
        } else {
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }} />
        }
    }} />
}

const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: state.user.currentUser,
        location: ownProps.path,
        routProps: {
            exact: ownProps.exact,
            path: ownProps.path
        }
    }
}

const PrivateRoute = connect(mapStateToProps)(PrivateRoute)
export default PrivateRoute
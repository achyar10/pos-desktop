import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {

    if (!localStorage.getItem('session')) {
        return (<Redirect to="/login" />)
    }
    return (<Route {...props} />)

}
export default PrivateRoute
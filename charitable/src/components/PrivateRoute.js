import React, { useState, useEffect } from 'react'
import { useHistory, Route } from 'react-router-dom'

const PrivateRoute = props => {

    const history = useHistory()

    const [userType, setUserType] = useState('')
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    const getUserData = () => {
        const user = localStorage.getItem('userData')
        if (user === null) return false
        else return true
    }

    const getNGOData = () => {
        const user = localStorage.getItem('ngoData')
        if (user === null) return false
        else return true
    }

    useEffect(() => {
        let user = getUserData()
        if (user) {
            setUserType('user')
            setLoading(false)
            return
        } else {
            user = getNGOData()
            if (user) {
                setUserType('ngo')
                setLoading(false)
                return
            } 
        }

        if (!user) {
            setNotFound(true)
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        if (notFound === true) {
            history.replace('/')
        }
    }, [notFound])


    if (!loading) {
        if (userType === 'user') return <Route exact path={props.path}>
            {props.children}
        </Route>
        else if (userType === 'ngo') return <Route exact path={props.path}>
            {props.children}
        </Route>
        else return <p></p>
    }
    else return <p></p>
}

export default PrivateRoute

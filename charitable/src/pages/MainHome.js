import React, { useEffect, useState } from 'react'

const MainHome = () => {
    
    const [userType, setUserType] = useState('')

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
        } else {
            user = getNGOData()
            if (user) {
                setUserType('ngo')
            } 
        }
    }, [])

    if (userType === 'user') return <p>Yser</p>
    else if (userType === 'ngo') return <p>NGO</p>
    else return <p>Go Back</p>
}

export default MainHome

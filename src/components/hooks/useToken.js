import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const email = user?.user?.email;
        const newUser = { email: email };
        if (email) {
            fetch(`https://parts-industo.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(data => {
                    const userToken = data.token;
                    if (data.token) {
                        localStorage.setItem('accessToken', userToken)
                        setToken(userToken)
                    }
                    console.log(data)
                })
        }
    }, [user])
    return [token]
};

export default useToken;
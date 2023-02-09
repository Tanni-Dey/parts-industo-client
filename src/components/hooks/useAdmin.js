import React, { useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setLoading] = useState(true)
    const email = user?.email;
    if (email) {
        fetch(`https://parts-industo.onrender.com/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setAdmin(data.admin)
                console.log(data.admin)
            })
    }
    return [admin, adminLoading]
};

export default useAdmin;
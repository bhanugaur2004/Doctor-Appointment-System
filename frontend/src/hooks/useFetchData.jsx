import React, { useState, useEffect } from 'react';
import { token } from '../config';
// import { toast } from "react-toastify";

const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)
            try {
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` }
                })

                // console.log(token)

                // console.log(res)

                const result = await res.json()

                // console.log(result.message)

                if (!res.ok) {
                    throw new Error(result.message + '🤢')
                }

                setData(result.data)
                // console.log(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error.message)
            }
        }

        fetchData()
    }, [url])
    return {
        data, loading, error,
    };
}

export default useFetchData
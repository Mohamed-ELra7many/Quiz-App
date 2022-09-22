import React, { useEffect, useState } from 'react'

const Time = ({ qustionNumber, setStop }) => {
    const [timer, setTimer] = useState(30)

    useEffect(() => {
        if (timer === 0) return setStop(true)
        const intirval = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)
        return () => clearInterval(intirval)
    }, [setStop, timer])

    useEffect(() => {
        setTimer(30)
    }, [qustionNumber])


    return timer
}

export default Time

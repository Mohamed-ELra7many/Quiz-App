import React, { useEffect, useState } from 'react'
import "./Home.scss"
import { mony } from '../Data'
import Main from './Main'
import Mony from './Mony'
import Start from './Start'

const Home = () => {
    const [qustionNumber, setQustionNumber] = useState(1)
    const [username, setUserName] = useState(null)
    const [end, setEnd] = useState("0 $")
    const [stop, setStop] = useState(false)

    useEffect(() => {
        qustionNumber > 1 && setEnd(mony.find(i => i.id === qustionNumber - 1).amount)
    }, [mony, qustionNumber])

    return (
        <>
            {username ? (
                <>
                    <Main qustionNumber={qustionNumber} stop={stop} end={end} setStop={setStop} setQustionNumber={setQustionNumber} />
                    <Mony qustionNumber={qustionNumber} />
                </>
            ) : <Start setUserName={setUserName} />}
        </>
    )
}

export default Home

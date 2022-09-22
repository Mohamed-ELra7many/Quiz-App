import React from 'react'
import Content from './Content'
import Time from './Time'

const Main = ({ qustionNumber, stop, end, setStop, setQustionNumber }) => {
    return (
        <div className="main">
            {stop ? <h1 className='endText'>لقد ربحت  : {end}</h1> :
                <>
                    <div className='top'>
                        <div className='time'>
                            <Time setStop={setStop} qustionNumber={qustionNumber} />
                        </div>
                    </div>
                    <div className='bottom'>
                        <Content qustionNumber={qustionNumber} setQustionNumber={setQustionNumber} setStop={setStop} />
                    </div>
                </>
            }
        </div>
    )
}

export default Main

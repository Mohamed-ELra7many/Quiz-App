import React, { useState } from 'react'
import { mony } from '../Data'

const Mony = ({ qustionNumber }) => {
    const [hidden, setHidden] = useState(false)
    return (
        <div className={hidden ? "mony active" : "mony"}>
            <ul className="monylist">
                {mony.map((item) => (
                    <li className={qustionNumber === item.id ? "mony-list-item active" : "mony-list-item"} key={item.id}>
                        <span className="number">{item.id}</span>
                        <span dir='ltr' className="amount">{item.amount}</span>
                    </li>
                ))}
            </ul>
            <button onClick={() => setHidden(!hidden)}>
                {hidden ? <i className="fa fa-arrow-right"></i> : <i className="fa fa-arrow-left"></i>}
            </button>
        </div>
    )
}

export default Mony

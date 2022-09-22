import React, { useRef } from 'react'

const Start = ({ setUserName }) => {
    const inputRef = useRef()
    const handle = () => {
        inputRef.current.value && setUserName(inputRef.current.value)
    }
    return (
        <div className='start'>
            <input type="text" placeholder='اسم المستخدم' ref={inputRef} required />
            <button className='start-button' onClick={() => handle()}>ابدا</button>
        </div>
    )
}

export default Start
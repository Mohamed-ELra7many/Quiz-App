import React, { useEffect, useState } from 'react'
import { Data } from '../Data'
import useSound from "use-sound"
import play from "../assets/play.mp3"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"

const Content = ({ qustionNumber, setQustionNumber, setStop }) => {
    const [question, setQuestion] = useState(null)

    const [className, setClassName] = useState("anser")
    const [select, setSelect] = useState(null)


    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    useEffect(() => {
        setQuestion(Data[qustionNumber - 1])
    }, [Data, qustionNumber])

    const delly = (dir, call) => {
        setTimeout(() => {
            call()
        }, dir)
    }


    const handle = (i) => {
        setSelect(i)
        setClassName("anser active")
        delly(3000, () => setClassName(i.answer ? "anser corect" : "anser rong"))
        delly(6000, () => {
            if (i.answer) {
                correctAnswer();
                setQustionNumber(prev => prev + 1)
                setSelect(null)
            } else {
                wrongAnswer()
                setStop(true)
            }
        })
    }

    return (
        <div className='content'>
            <div className='qustion'>{question?.question}</div>
            <div className='ansers'>
                {question?.answers.map((item, i) => (
                    <div
                        className={select === item ? className : "anser"}
                        onClick={() => handle(item)}
                        key={i}
                    >
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content

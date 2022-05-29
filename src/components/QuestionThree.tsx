import { useState } from "react";
import { Budui, ThirdQuestionWrapper } from "./question.styles";
import cross from '../img/cross.png'
import budui from '../img/yeas.png'
import smileThree from '../img/smile-3.jpg'


import underwear from '../img/underwear.jpg'

type Props = {
    countAnswer: () => void
}

function QuestionThree({countAnswer}: Props) {
    const answer = 'gucci'
    const [isCorrect, setIsCorrect] = useState<boolean>(false) 
    const [userAnswer, setUserAnswer] = useState<string>('')
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false) 
    
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        let answer = e.target.value.toLocaleLowerCase()
        answer = answer.replace(/\s/g, '').replace(/[^a-zA-Z ]/g, "")
        setUserAnswer(answer)
    } 

    function checkAnswer() {
        if (userAnswer !== '') {
            if (userAnswer === answer) {
            setIsCorrect(true)
        } else {
            setIsIncorrect(true)
        }}
    }
    
    return ( 
        <>
            {isIncorrect &&
                <Budui className='budui' onClick={() => setIsIncorrect(false)}> 
                    <img src={ cross} className='cross'/>    
                    <h1 className='budui--text'>不对！！</h1>
                    <img src={budui} className='budui--img'/>
                </Budui>
            }
        <ThirdQuestionWrapper>
            {!isCorrect && (
                <>
                <h1>第三个问题</h1>
                <h4>康瑶穿什么牌子的内裤？</h4>
                <img src={ underwear}/>
                <input type='text' placeholder="输入答案..." onChange={handleChange} />
                <button onClick={checkAnswer}>提交答案</button>
                </>
            )}
            {isCorrect && (
                <>
                    <h1>对的</h1>
                        <h4>内裤应该是Gucci </h4>
                        <img src={smileThree} className='smileThree turn' /> 
                        <h5>密码的第二部分是就‘blyat'’</h5>
                    <button onClick={() => countAnswer()}>最后个问题</button>
                </>
            )}
        </ThirdQuestionWrapper>
        </>

     );
}

export default QuestionThree;
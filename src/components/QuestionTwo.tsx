import gif from '../img/giphy.gif'
import { useState } from "react";
import { Budui, SecondQuestionWrapper } from './question.styles';
import budui from '../img/budui.png'
import cross from '../img/cross.png'
import smileThree from '../img/smile-3.jpg'

type Props = {
    countAnswer: () => void
}

function QuestionTwo({countAnswer}: Props) {
    const answer = ['pashelnahui', 'bashounahui', 'pashounahui', 'bashelnahui', 'basholnahui', 'pasholnahui']
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
            if (answer.includes(userAnswer)) {
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
        <SecondQuestionWrapper>
            {!isCorrect && (
                <>
                    <h1>第二个问题</h1>
                    <h4>她说什么？</h4>
                    <img src={gif }/>
                    <input type='text' placeholder="输入答案..." onChange={handleChange} />
                    <button onClick={checkAnswer}>提交答案</button>
                </>
                )}
            {isCorrect && (
                <>
                    <h1>对!!!!</h1>
                        <h4>就是 ‘你好’ 的意思 </h4>
                        <img src={smileThree} className='smileThree' /> 
                        <h5>密码的第三部分是就‘pashol nahui’</h5>
                        <h6>(确保你输入正确)</h6>
                    <button onClick={() => countAnswer()}>下个问题</button>
                </>
            )}
        </SecondQuestionWrapper>
            </>

     );
}

export default QuestionTwo;
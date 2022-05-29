import { useState } from "react";
import { Budui, FirstQuestionWrapper } from "./question.styles";
import lime from '../img/lime.png'
import tequilaBudui from '../img/tequila-budui.png'
import tequilaDui from '../img/tequila-dui.png'
import cross from '../img/cross.png'

type Props = {
    countAnswer: () => void
}

function QuestionOne({countAnswer}: Props) {
    const answer = 'tequila' 
    const [userAnswer, setUserAnswer] = useState<string>('')
    const [isCorrect, setIsCorrect] = useState<boolean>(false) 
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false) 
    
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        let answer = e.target.value.toLocaleLowerCase()
        answer = answer.replace(/\s/g, '').replace(/[^a-zA-Z ]/g, "")
        setUserAnswer(answer)
    } 

    function checkAnswer() {
        if (userAnswer!=='') {
            if (userAnswer === answer) {
            setIsCorrect(true)
        } else {
            setIsIncorrect(true)
        }}
    }
    
    return (
        <>
            {isIncorrect &&
                <Budui onClick={() => setIsIncorrect(false)}>
                    <img src={ cross} className='cross'/>
                    <div className="budui--text">
                        <h1>不对!</h1>
                        <h4>再试一次</h4>
                    </div>
                    <img src={tequilaBudui} className='budui--img' />
                </Budui>
            }
        <FirstQuestionWrapper className="questionOne">
            
            {!isCorrect && (
                <>
                <h1>第一个问题</h1>
                    <h4>什么酒最好喝？</h4>
                <input type='text' placeholder="输入答案..." onChange={handleChange} />
                <button onClick={checkAnswer}>提交答案</button>
                </>
            )}
            <img src={lime }/>
            {isCorrect && (
                <>
                    <h1>对!!!!</h1>
                    <img className="dui--img" src={tequilaDui } />
                        <h4>但其实说，任何酒都很好， 当和朋友一起喝</h4>
                        <h5>密码的第一部分是‘suka’</h5>
                    <button onClick={() => countAnswer()}>下一个问题</button>
                </>
            )}
        </FirstQuestionWrapper>
            </>

     );
}

export default QuestionOne;
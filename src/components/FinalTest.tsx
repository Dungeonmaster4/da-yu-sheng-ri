import {useState} from 'react'
import { Congrats, FinalQuestionWrapper } from './question.styles'
import gif from '../img/giphy.gif'
import fly from '../img/butterfly.png'

type Props = {
    countAnswer: () => void
}

function FinalTest({ countAnswer}:Props) {
    const answer = 'sukablyatpasholnahui'
    const [isCorrect, setIsCorrect] = useState<boolean>(false) 
    const [userAnswer, setUserAnswer] = useState<string>('')
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let answer = e.target.value.toLocaleLowerCase()
        answer = answer.replace(/\s/g, '').replace(/[^a-zA-Z ]/g, "")
        setUserAnswer(answer)
    } 
    
    function checkAnswer() {
        if (userAnswer === answer) {
            countAnswer()
            setIsCorrect(true)
        }
    }
    return (
        <>
            {!isCorrect && 
                <FinalQuestionWrapper>
                    <h3>差不多好了 还有一点点</h3>
                    <p>请输入 第一部分 + 第二部分 + 第三部分</p>
                    <input type='text' placeholder="输入密码。。。" onChange={handleChange} />
                    <button onClick={checkAnswer}>checkAnswer</button>
                </FinalQuestionWrapper>
            }
            {isCorrect && 
                <Congrats>
                    <img src={fly} className='fly'/>
                    <h1>Congratulations!</h1>
                    <h4>你证明了你是大雨！</h4>
                    <h3>大雨! 大大大雨!</h3>
                    <h3>Happy Birthday to you!</h3>
                    <h5>你的礼物就是我的友谊 :)</h5>
                    <h5>生日快乐朋友 </h5>
                    <h4 className='ai'>爱你</h4>
                    <img src={gif} />
                </Congrats>
            }
            </>
      );
}

export default FinalTest;
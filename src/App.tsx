import { useState } from "react";
import QuestionOne from "./components/QuestionOne";
import QuestionThree from "./components/QuestionThree";
import QuestionTwo from "./components/QuestionTwo";
import FinalTest from "./components/FinalTest";
import { GlobalStyle, Wrapper } from "./App.styles";
import smileThree from './img/smile-3.jpg'


function App() {
  const [number, setNumber] = useState<number>(0)
console.log(number);

  function countAnswerOne() {
    setNumber(2)
  }
  function countAnswerTwo() {
    setNumber(3)
  }
  function countAnswerThree() {
    setNumber(4)
  }
  function countFinalAnswer() {
    setNumber(5)
  }
  
  return (
    <Wrapper >
      <GlobalStyle />
      {number < 1 && <h1>欢迎！</h1>}
      {number === 0 && <h5>这里有大雨的生日礼物</h5>}
      {number === 0 && <h5>但首先证明你是我的大雨</h5>}
      {number === 0 && <h5>回答几个问题 只她能回答</h5>}
      {number === 0 &&
        <div className="start">
          <button onClick={() => setNumber(1)}>开始</button>
          <img src={smileThree} className='smileThree'/>  
        </div>
      }
      {number > 0 && number < 4 && <h3>Question {number}/3</h3>}
      {number === 4 && <h3>Final Question</h3>}
      <div>
        {number ===1 && <QuestionOne countAnswer={ countAnswerOne}/>}
        {number === 2 && <QuestionTwo countAnswer={ countAnswerTwo}/>}
        {number === 3 && <QuestionThree countAnswer={ countAnswerThree}/>}
        {number >= 4 && <FinalTest countAnswer ={ countFinalAnswer} />}
      </div>
    </Wrapper>
  );
}

export default App;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px #713e5a;
  margin-bottom: 1rem;
  padding: 20px;
  /* min-height: 50vh; */
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  button {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  .dui--img {
    opacity: 1;
    position: initial;
    width: 70%;
    border-radius: 5px;
    border: solid 3px black;
    margin-bottom: 1rem;
  }
`;

export const Budui = styled.div`
  position: absolute;
  padding: 5px;
  z-index: 100;
  width: 100%;
  max-width: 350px;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  .budui--text {
    position: absolute;
    bottom: 20%;
    right: 20%;
    /* left: 50%; */
  }
  .budui--img,
  .dui--img {
    opacity: 1;
    position: initial;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .cross {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export const FirstQuestionWrapper = styled(Wrapper)`
  background-color: #63a375;
  position: relative;
  img {
    width: 30%;
    position: absolute;
    right: 10px;
    bottom: 10px;
    opacity: 0.5;
    z-index: 10;
  }
  h1,
  h4 {
    color: #fff;
    margin-bottom: 1rem;
  }
  button {
    background-color: #713e5a;
    width: 120px;
    height: 50px;
    border-radius: 10px;
    color: #fff;
    border: none;
    margin-top: 1rem;
  }
  input {
    width: 80%;
    border: none;
    height: 1.5rem;
    border-radius: 5px;
    color: black;
    z-index: 20;
  }
`;

export const SecondQuestionWrapper = styled(FirstQuestionWrapper)`
  background-color: #713e5a;
  height: 100%;
  img {
    width: 50%;
    position: initial;
    opacity: 1;
    margin-bottom: 1rem;
  }
  button {
    background-color: #ca6680 !important;
  }
`;

export const ThirdQuestionWrapper = styled(FirstQuestionWrapper)`
  background-color: #ca6680;
  height: 100%;
  img {
    width: 50%;
    position: initial;
    opacity: 1;
    margin-bottom: 1rem;
  }
  button {
    background-color: #63a375 !important;
  }
`;

export const FinalQuestionWrapper = styled(FirstQuestionWrapper)`
  background-color: inherit;
  height: 100%;
  border: none;
  box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.2);
  button {
    background-color: #713e5a;
  }
  input {
    margin-top: 1rem;
  }
`;

//713e5a-63a375-edc79b-d57a66-ca6680
export const Congrats = styled(Wrapper)`
  margin-top: 2rem;
  overflow-y: hidden;
  background-color: #713e5a;
  .ai {
    z-index: 10;
    color: pink;
  }
  img {
    width: 50%;
    margin-top: 1rem;
    z-index: 10;
  }
  &:after {
    z-index: 0;
    content: "";
    width: 200%;
    height: 50px;
    background-color: #63a375;
    transform: rotate(45deg);
  }
  .fly {
    position: absolute;
    opacity: 0.7;
    top: -20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
`;

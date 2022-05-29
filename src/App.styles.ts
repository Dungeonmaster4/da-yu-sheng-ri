import styled, { createGlobalStyle } from "styled-components";

//713e5a-63a375-edc79b-d57a66-ca6680
export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        color: #fff;
        text-align: center;
    }
    html {
      background-color: #d57a66 ;
    }
    h1, h5, h3 {
      text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
    }
    button {
      cursor: pointer;
    }
`;

export const Wrapper = styled.div`
  h1,
  h5,
  h3 {
    margin: 1rem 0;
  }
  button {
    background-color: #713e5a;
    width: 120px;
    height: 50px;
    border-radius: 10px;
    color: #fff;
    border: none;
  }

  .start {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .smileThree {
    margin-top: 1rem;
    width: 75%;
    max-width: 10rem;
    border-radius: 50%;
    border: solid 3px #713e5a;
  }
  .turn {
    transform: rotate(30deg);
  }
`;

import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 28px;
  transition: all 0.2s linear;
  width: calc(100%-2rem);
  min-height: calc( 100vh - 299px );
  background-color: ${({ theme }) => theme.bgColor};
  & h2 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.titleColor};
  };
  & h3 {
    font-weight: 400;
  }
  & h4 {
    font-weight: 200;
    color: ${({ theme }) => theme.secondTextColor};
  }
  & form {
    color: ${({ theme }) => theme.headerTextColor};
    background-color: ${({ theme }) => theme.formBgColor};
    border : ${({ theme }) => theme.borderColor};
  };
  & input {
    padding: 10px;
    border-radius: .5em;
    background-color: ${({ theme }) => theme.inputBgColor};
  };
  & input[type=submit] {
    background-color: ${({ theme }) => theme.keyColor};
  }
  & input::placeholder {color:#444;}
  & input::-webkit-input-placeholder {color:#444;}
  & input:-ms-input-placeholder {color:#444;}

  & textarea::placeholder {color:#444;}
  & textarea::-webkit-input-placeholder {color:#444;}
  & textarea:-ms-input-placeholder {color:#444;}

  & select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  
    font-family: "Noto Sansf KR", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  
    color: #444;
    background-color: ${({ theme }) => theme.inputBgColor};
  
    padding: .6em 1.4em .5em .8em;
    margin: 0;
  
    border: 1px solid #aaa;
    border-radius: .5em;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  };

  & select:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  };

  & select:disabled {
    opacity: 0.5;
  }
`;

export const MainContainer = styled.div`
    width:100%;
    max-width:1024px;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    `
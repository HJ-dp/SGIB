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
  min-height: calc( 100vh - 304px );
  background-color: ${({ theme }) => theme.bgColor};
  & h2 {
    font-size: 48px;
    font-weight: 500;
    padding-bottom: 40px;
    color: ${({ theme }) => theme.textColor};
    text-align: center;
  }
`;
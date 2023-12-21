import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/themeProvider';
import { FlexContainer, MainContainer } from '../style/styles';
import ThemeToggle from '../theme/ThemeToggle';
import Header from './common/Header';
import Footer from './common/Footer';

const AppLayout = ({children}) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <WrapContainer>
      <Header />
      <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
        DarkMode
      </ThemeToggle>
      <FlexContainer><MainContainer>{children}</MainContainer></FlexContainer>
      <Footer/>
    </WrapContainer>
  )
}

export default AppLayout;

const WrapContainer = styled.main`
  position: relative;
  overflow-x: hidden;
`;
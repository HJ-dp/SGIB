import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useTheme } from '../../context/themeProvider';

function Header() {
    const ThemeMode = useTheme();
    const CurrentMode = ThemeMode[0] === 'light' ? '🌝' : '🌚';

    return (
        <HeaderContainer>
            <div className="header-container">
                <div className='header-wrapper'>
                    <div className='header-menu-box'>
                        <Link className='logo' to='/' >SGIB</Link>
                    </div>
                    <ColoredText>Current mode is {CurrentMode}</ColoredText>
                    <div className='header-menu-box'>
                        <Link to='/' >공통</Link>
                        <Link to='/' >특화</Link>
                        <Link to='/' >자율</Link>
                    </div>
                    <div className='header-login-box'>
                        <Link to='/' >로그인</Link>
                        <Link to='/test'>마이페이지</Link>
                    </div>
                    <div className='menuBtn'><img width="40" height="40" src="https://img.icons8.com/cotton/50/menu.png" alt="menu" /></div>
                </div>
            </div>
        </HeaderContainer>
    );
}

export default Header;

const ColoredText = styled.span`
  color: #E6B74A;
`

const HeaderContainer = styled.main`
.header-container {
    background-color: ${({ theme }) => theme.headerColor};
    height: 44px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.headerTextColor};
    transition:0.5s;
}

.header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
}

.logo {
    text-shadow: 1px 1px 1px;
    font-size: 17px;
}

.menuBtn{
    display: none;
}

.header-login-box,
.header-menu-box {
    display: flex;
    gap: 1em;
}

.header-login-box a:hover,
.header-menu-box a:hover {
    transform: scale(1.1);
    transition: 0.2s;
}

@media (max-width:768px) {
    .header-login-box,
    .header-menu-box {
        display: none;
    }

    .menuBtn{
        display: block;
    }
}

@media (max-width:1200px) {
    .header-wrapper {
        padding: 0 10vw;
    }
    
}
`;
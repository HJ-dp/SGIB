import styled from 'styled-components';

function Footer() {
    return (
      <FooterContainter>
      <div className='footer-containter'>
        <div className='footer-links'>
            <h1>서비스</h1>
            <h3>공통</h3>
            <h3>특화</h3>
            <h3>자율</h3>
        </div>
        <div className='footer-links'>
            <h1>문의</h1>
            <span>sgib@sgib.com</span>
        </div>
        <span>Copyright 2023. BMK, LHJ. all rights reserved.</span>
      </div>
      </FooterContainter>
    );
  }
  
  export default Footer;
  

  const FooterContainter = styled.main`
  width:100%;
  background-color: ${({ theme }) => theme.headerColor};
  margin: 0 auto;

  .footer-containter{
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 auto;
    max-width:1024px;
    color : ${({ theme }) => theme.footerTextColor};
    
}
@media (max-width:1200px) {
  padding: 0 5vw;
  
}

  `;
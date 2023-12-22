import styled from 'styled-components';

function CampusSelector({ handleState }) {
    return (
        <SelectorContainer>
            <Button onClick={() => handleState('서울')}>서울</Button>
            <Button onClick={() => handleState('구미')}>구미</Button>
            <Button onClick={() => handleState('대전')}>대전</Button>
            <Button onClick={() => handleState('광주')}>광주</Button>
            <Button onClick={() => handleState('부울경')}>부울경</Button>
        </SelectorContainer>
    );
}

export default CampusSelector;

const SelectorContainer = styled.div`
    display:flex;
    gap:1em;
`

const Button = styled.button`
    font-size:14px;
    border:none;
    border-radius:.5em;
    padding:10px 20px;
    background-color: ${({ theme }) => theme.boxBgColor};
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    &:hover {
        cursor: pointer;
        box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
  }
`
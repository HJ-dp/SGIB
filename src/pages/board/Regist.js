import styled from '@emotion/styled';
import RegistForm from '../../components/auth/Regist';

function Regist() {

  return (
    <Boardgap>
      <h2>회원가입</h2>
      <RegistForm />
    </Boardgap>
  );
}

export default Regist;

const Boardgap = styled.div`
  display:flex;
  flex-direction:column;
  gap:1em;
  width:100%;
  align-items:center;
`
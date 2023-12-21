import styled from 'styled-components';
import HrItem from './HrItem';
import TeamItem from './TeamItem';
function BoardList(props) {
  return (
    <>
      <h2>{props.campus} 캠퍼스</h2>
      <ListContainter>
        {props.category==='hr'?
        <HrItem campus={props.campus} />
        :
        <TeamItem campus={props.campus}/>
        }
      </ListContainter>
    </>
  );
}

export default BoardList;

const ListContainter = styled.div`
  width:100%;
  display:grid;
  padding:1em;
  grid-gap:4em;
  grid-template-columns: repeat(auto-fill, 200px)
;  `;
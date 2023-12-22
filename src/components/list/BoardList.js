import styled from 'styled-components';
import HrItem from './HrItem';
import TeamItem from './TeamItem';
function BoardList(props) {
  const ListContainter = styled.div`
    width:100%;
    display:grid;
    padding:1em;
    grid-gap:2em;
    justify-content: center;
    grid-template-columns:${props.category === 'hr' ? 'repeat(auto-fill, 220px)' : 'repeat(auto-fill, 320px)'} ;
    `;
  return (
    <>
      <h2>{props.campus} 캠퍼스</h2>
      <ListContainter>
        {props.category === 'hr' ?
          <>
            <HrItem campus={props.campus} />
            <HrItem campus={props.campus} />
            <HrItem campus={props.campus} />
            <HrItem campus={props.campus} />
            <HrItem campus={props.campus} />
          </>
          :
          <>
          <TeamItem campus={props.campus} />
          <TeamItem campus={props.campus} />
          <TeamItem campus={props.campus} />
          <TeamItem campus={props.campus} />
          <TeamItem campus={props.campus} />
          <TeamItem campus={props.campus} />
          </>
        }
      </ListContainter>
    </>
  );
}

export default BoardList;

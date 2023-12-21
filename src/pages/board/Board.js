import CampusSelector from '../../components/list/CampusSelector';
import BoardList from '../../components/list/BoardList';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Board(props) {
  const [location, setLocation] = useState('서울');
  const { category } = useParams();
  const categoryName = () => {
    switch (category) {
      case 'common':
        return '공통';
      case 'special':
        return '특화';
      case 'free':
        return '자율';
    }
  }
  const handleState = (data) => {
    setLocation(data);
  }

  const center = {
    margin: '0 auto',
  }

  return (
    <>
      {props.boardList === 'team' ?
        <>
          <h2>{categoryName()}프로젝트 팀 구하기</h2>
          <div style={center}>
            <CampusSelector handleState={handleState} />
          </div>
          <BoardList category={"team"} campus={location} />
        </>
        :
        <>
          <h2>팀원 구하기</h2>
          <div style={center}>
            <CampusSelector handleState={handleState} />
          </div>
          <BoardList category={"hr"} campus={location} />
        </>
      }
    </>
  );
}

export default Board;
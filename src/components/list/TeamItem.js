import styled from 'styled-components';

function TeamItem(props) {
    return (
        <TeamItemContainer>
            <InfoContainer>
                <Info>
                    <h3>팀이름</h3>
                    <h3>{props.campus}</h3>
                    <h3>Project(공통)</h3>
                    <h3>Project_track</h3>
                    <h3>Team_Leader</h3>
                </Info>
                <Picture>
                    사진
                </Picture>
            </InfoContainer>
            <BadgeContainer>
                <Badge>프론트엔드</Badge>
                <Badge>백엔드</Badge>
                <Badge>DB</Badge>
            </BadgeContainer>
            <Participation>협의</Participation>
        </TeamItemContainer>
    );
}

export default TeamItem;


const TeamItemContainer = styled.div`
  position : relative;
  width : 300px;
  min-height : 200px;
  padding : 10px;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  background-color : ${({ theme }) => theme.boxBgColor};
  border-radius : .5em;
  gap : 2em;
  box-shadow : 2px 4px 12px rgba(0, 0, 0, .08);
  transition : all .3s cubic-bezier(0, 0, .5, 1);
  &:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
    cursor:pointer;
  }
  `;

const BadgeContainer = styled.div`
  padding:3px;
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  `;

const Badge = styled.p`
  margin:2px;
  padding:5px;
  color : ${({ theme }) => theme.badgeTextColor};
  background-color: ${({ theme }) => theme.headerColor};
  border-radius:5px;
  `;

const Picture = styled.div`
  width:80px;
  height:80px;
  border-radius:5px;
  background-color:gray;
  border:1px solid white;
  `;

const InfoContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  gap:2em;
  `;

const Info = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-end;
  gap:.5em;
  `;


const Participation = styled.div`
  position:absolute;
  top:-10px;
  right:-10px;
  padding:10px;
  border: 1px solid white;
  color : ${({ theme }) => theme.badgeTextColor};
  background-color: ${({ theme }) => theme.headerColor};
  border-radius:5px;
`

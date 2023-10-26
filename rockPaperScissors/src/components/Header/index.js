import {
  Header,
  HeaderRockPaperContainer,
  ScoreContainer,
  ScoreHead,
  ScoreDisplay,
  HeaderListNames,
} from './styledComponents'

const MainHeader = props => {
  const {score} = props
  return (
    <Header>
      <HeaderListNames>
        Rock <br /> Paper <br />
        Scissors
      </HeaderListNames>

      <ScoreContainer>
        <ScoreHead>Score</ScoreHead>
        <ScoreDisplay>{score}</ScoreDisplay>
      </ScoreContainer>
    </Header>
  )
}

export default MainHeader

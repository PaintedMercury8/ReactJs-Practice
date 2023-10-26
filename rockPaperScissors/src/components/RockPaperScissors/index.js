import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import {
  MainContainer,
  RockPaperScissorsContainer,
  RetryViewPlayerAndEnemy,
  WinOrLoseHead,
  WinOrLoseContainer,
  PlayAgain,
  ModalButton,
  Modal,
  RulesImg,
  CloseBtn,
} from './styledComponents'
import MainHeader from '../Header/index'
import GameIcons from '../GameIcons/index'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const renderViews = {
  game: 'GAME',
  retry: 'RETRY',
}

const initialData = {
  initial: '',
  initialScore: 0,
  initialWin: 'INITIAL',
}

const winData = {
  win: 'YOU WON',
  lose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class RockPaperScissors extends Component {
  state = {
    playerChoice: initialData.initial,
    opponentChoice: initialData.initial,
    view: renderViews.game,
    score: initialData.initialScore,
    winOrLose: initialData.initialWin,
  }

  onClickGameButton = (id, playerChoiceImg) => {
    const randomIndexValue =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const playerData = {
      id,
      imageUrl: playerChoiceImg,
    }
    if (id === randomIndexValue.id) {
      this.setState({
        winOrLose: winData.draw,
        playerChoice: playerData,
        opponentChoice: randomIndexValue,
        view: renderViews.retry,
      })
    } else if (
      (id === 'ROCK' && randomIndexValue.id === 'SCISSORS') ||
      (id === 'SCISSORS' && randomIndexValue.id === 'PAPER') ||
      (id === 'PAPER' && randomIndexValue.id === 'ROCK')
    ) {
      this.setState(prevState => ({
        winOrLose: winData.win,
        playerChoice: playerData,
        opponentChoice: randomIndexValue,
        score: prevState.score + 1,
        view: renderViews.retry,
      }))
    } else {
      this.setState(prevState => ({
        winOrLose: winData.lose,
        playerChoice: playerData,
        opponentChoice: randomIndexValue,
        score: prevState.score - 1,
        view: renderViews.retry,
      }))
    }
  }

  playAgain = () => {
    this.setState({view: renderViews.game})
  }

  gameView = () => (
    <RockPaperScissorsContainer>
      {choicesList.map(eachItem => (
        <GameIcons
          key={eachItem.id}
          data={eachItem}
          onClickGameButton={this.onClickGameButton}
          isAfterGame={false}
        />
      ))}
    </RockPaperScissorsContainer>
  )

  retryView = () => {
    const {playerChoice, opponentChoice, winOrLose} = this.state
    return (
      <RockPaperScissorsContainer>
        <GameIcons data={playerChoice} isAfterGame person="YOU" />
        <GameIcons data={opponentChoice} isAfterGame person="OPPONENT" />
        <WinOrLoseContainer>
          <WinOrLoseHead>{winOrLose}</WinOrLoseHead>
          <PlayAgain type="button" onClick={this.playAgain}>
            PLAY AGAIN
          </PlayAgain>
        </WinOrLoseContainer>
      </RockPaperScissorsContainer>
    )
  }

  renderView = () => {
    const {view} = this.state
    switch (view) {
      case renderViews.game:
        return this.gameView()
      case renderViews.retry:
        return this.retryView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <MainContainer>
        <MainHeader score={score} />
        {this.renderView()}
        <Popup
          trigger={<ModalButton type="button">Rules</ModalButton>}
          position="top left"
          modal
        >
          {close => (
            <Modal>
              <CloseBtn type="button" onClick={close}>
                <RiCloseLine />
              </CloseBtn>
              <RulesImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </Modal>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default RockPaperScissors

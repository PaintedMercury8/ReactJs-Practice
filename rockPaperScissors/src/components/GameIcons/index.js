import {
  GameListItem,
  GameImg,
  GameButtonDisabled,
  GameButton,
} from './styledComponents'

const GameIcons = props => {
  const {data, onClickGameButton, isAfterGame, person} = props
  const {id, imageUrl} = data

  const onClickButton = () => {
    onClickGameButton(id, imageUrl)
  }

  if (isAfterGame === false) {
    return (
      <GameListItem>
        <GameButton
          type="button"
          onClick={onClickButton}
          data-testid={`${id.toLowerCase()}Button`}
        >
          <GameImg src={imageUrl} alt={id} />
        </GameButton>
      </GameListItem>
    )
  }

  return (
    <GameListItem>
      <GameButtonDisabled type="button">
        <p>{person}</p>
        <GameImg
          src={imageUrl}
          alt={person === 'YOU' ? 'your choice' : 'opponent choice'}
        />
      </GameButtonDisabled>
    </GameListItem>
  )
}

export default GameIcons

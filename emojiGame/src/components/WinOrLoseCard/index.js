// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {score, reset} = props

  const resetGame = () => {
    reset()
  }

  const lost = () => (
    <div className="main1-container">
      <div className="winLossContainer">
        <div className="score-cont">
          <h1 className="white">You Lose</h1>
          <p className="white">Score</p>
          <p className="blue">{score}/12</p>
          <button className="playAgain" type="button" onClick={resetGame}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          className="winLossImg"
          alt="win or lose"
        />
      </div>
    </div>
  )

  const won = () => (
    <div className="main1-container">
      <div className="winLossContainer">
        <div className="score-cont">
          <h1 className="white">You Won</h1>
          <p className="white">Best Score</p>
          <p className="blue">{score}/12</p>
          <button className="playAgain" type="button" onClick={resetGame}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  )

  if (score <= 11) {
    return lost()
  }
  return won()
}

export default WinOrLossCard

// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {score, topScore, isTrue} = props

  return (
    <header className="header">
      <div className="head-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo"
          alt="emoji logo"
        />
        <h1 className="main-logo-head">Emoji Game</h1>
      </div>
      {isTrue === false && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </header>
  )
}

export default EmojiCard

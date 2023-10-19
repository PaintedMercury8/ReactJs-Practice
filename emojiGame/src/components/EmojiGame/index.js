/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard/index'
import NavBar from '../NavBar/index'
import WinOrLossCard from '../WinOrLoseCard/index'

const initialEmojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    EmojiList: initialEmojisList,
    lost: false,
    recordList: [],
  }

  changeOrder = () => {
    const randomList = initialEmojisList
    this.setState({EmojiList: randomList.sort(() => Math.random() - 0.5)})
  }

  checkWin = id => {
    const {score, topScore} = this.state
    const {recordList} = this.state
    if (recordList.includes(id) === true) {
      this.setState({lost: true})
    } else if (recordList.includes(id) === false) {
      this.setState(prevState => ({recordList: [...prevState.recordList, id]}))

      if (score >= topScore) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          topScore: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({score: prevState.score + 1}))
      }
    }
  }

  emojiGame = () => {
    const {EmojiList} = this.state
    return (
      <div className="main-container">
        <ul className="emoji-container">
          {EmojiList.map(eachItem => (
            <EmojiCard
              data={eachItem}
              key={eachItem.id}
              changeOrder={this.changeOrder}
              checkWin={this.checkWin}
            />
          ))}
        </ul>
      </div>
    )
  }

  reset = () => {
    this.setState({lost: false, score: 0, recordList: []})
  }

  render() {
    const {EmojiList, score, topScore, lost} = this.state
    return (
      <div className="bg-container">
        <NavBar
          score={score}
          topScore={topScore}
          isTrue={score === EmojiList.length || lost === true}
        />
        {lost || score === EmojiList.length ? (
          <WinOrLossCard score={score} reset={this.reset} />
        ) : (
          this.emojiGame()
        )}
      </div>
    )
  }
}

export default EmojiGame

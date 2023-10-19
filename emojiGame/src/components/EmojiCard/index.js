// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {data, changeOrder, checkWin} = props
  const {id, emojiName, emojiUrl} = data

  const change = () => {
    checkWin(id)
    changeOrder()
  }
  return (
    <li className="emojis-item">
      <button className="emojiBtn" type="button" onClick={change}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {click: false}

  changeState = () => {
    this.setState({click: true})
  }

  getLove = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} className="emoji-img" alt="love emoji" />
        <h1 className="main-head">Thank You!</h1>
        <p className="feedback-para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  getFeedbackEmojis = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="main-head">
          How Satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(eachItem => (
            <li
              className="emoji-item"
              onClick={this.changeState}
              key={eachItem.id}
            >
              <img
                src={eachItem.imageUrl}
                className="emoji-img"
                alt={eachItem.name}
              />
              <p className="emoji-type">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {click} = this.state
    return (
      <div className="bg-container">
        {click === false ? this.getFeedbackEmojis() : this.getLove()}
      </div>
    )
  }
}

export default Feedback

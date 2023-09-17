import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    commentInput: '',
  }

  addComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const classColour = this.getRandomClass()
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      colour: classColour,
      isLiked: false,
      date: new Date(),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  changeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  changeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  getRandomClass = () => {
    const randInt = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    return initialContainerBackgroundClassNames[randInt]
  }

  changeLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteItem = id => {
    const {commentsList} = this.state
    const filteredArray = commentsList.filter(eachItem => eachItem.id !== id)
    this.setState({commentsList: filteredArray})
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state
    return (
      <div className="bg-container">
        <h1 className="comment-head">Comments</h1>
        <form className="comment-input-container" onSubmit={this.addComment}>
          <div className="comment-input-flex">
            <p className="comment-para">Say Something about 4.0 Technologies</p>
            <input
              type="text"
              className="inputName"
              id="commentName"
              placeholder="Your Name"
              onChange={this.changeNameInput}
              value={nameInput}
            />
            <textarea
              rows="10"
              cols="30"
              className="inputComment"
              placeholder="Your Comment"
              onChange={this.changeCommentInput}
              value={commentInput}
            />
            <button className="btn" type="submit">
              Add Comment
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="main-img"
            alt="comments"
          />
        </form>
        <hr className="line" />
        <div className="commentItemContainer">
          <p className="commentLength">
            <span className="length-back">{commentsList.length}</span> Comments
          </p>
          <ul className="commentItemList">
            {commentsList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                data={eachItem}
                changeLike={this.changeLike}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments

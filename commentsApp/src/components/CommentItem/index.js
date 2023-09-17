// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {data, changeLike, deleteItem} = props
  const {id, name, comment, colour, date, isLiked} = data
  const classBack = `prof-back ${colour}`
  const url = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const sendLike = () => {
    changeLike(id)
  }

  const deleteItemBtn = () => {
    deleteItem(id)
  }

  const likeClass = isLiked ? 'click liked' : 'click like'
  return (
    <li className="commentItem">
      <div className="prof-cont-img">
        <div className={classBack}>
          <p>{name.slice(0, 1).toLocaleUpperCase()}</p>
        </div>
        <p className="name">{name}</p>
        <p className="date">{formatDistanceToNow(date)}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="likeAndDelete">
        <div className="likeCont">
          <img className="likeImg" src={url} alt="like" />
          <button className={likeClass} type="button" onClick={sendLike}>
            Like
          </button>
        </div>
        <button
          className="delete-btn"
          data-testid="delete"
          type="button"
          onClick={deleteItemBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-Img"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem

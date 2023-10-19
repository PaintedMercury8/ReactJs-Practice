// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {data} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = data
  const url = `blogs/${id}`
  return (
    <Link to={url} className="list-link-container">
      <li className="list-item">
        <img src={imageUrl} className="main-img" alt={title} />
        <div className="item-details-container">
          <p>{topic}</p>
          <h2>{title}</h2>
          <div className="author-container">
            <img src={avatarUrl} className="author-img" alt={author} />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem

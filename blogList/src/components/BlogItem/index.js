// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {data} = props
  const {title, description, publishedDate} = data

  return (
    <li className="blog-item-list">
      <div className="blog-item-data-head">
        <h2 className="name">{title}</h2>
        <p className="published-data-description">{publishedDate}</p>
      </div>
      <p className="published-data-description">{description}</p>
    </li>
  )
}

export default BlogItem

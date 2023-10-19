// Write your JS code here

import './index.css'
import BlogItem from '../BlogItem/index'

const BlogList = props => {
  const {data} = props
  console.log(data)
  return (
    <ul className="list-container">
      {data.map(eachItem => (
        <BlogItem data={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList

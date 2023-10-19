// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogDetailData: {}, isLoading: true}

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getDetails(id)
  }

  getDetails = async id => {
    const url = `https://apis.ccbp.in/blogs/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const filteredData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogDetailData: filteredData, isLoading: false})
  }

  render() {
    const {blogDetailData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content, topic} = blogDetailData
    console.log(blogDetailData)
    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1>{title}</h1>
            <div className="author-container">
              <img src={avatarUrl} className="author-img" alt={author} />
              <p>{author}</p>
            </div>
            <img src={imageUrl} className="details-img" alt={title} />
            <p className="content">{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

const profileView = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
const initialValues = {
  name: '',
  description: '',
  profileInitialImage: '',
}

class Profile extends Component {
  state = {
    view: profileView.initial,
    name: initialValues.name,
    description: initialValues.description,
    profileImage: initialValues.profileInitialImage,
  }

  componentDidMount() {
    this.getProfile()
  }

  getProfile = async () => {
    this.setState({view: profileView.loading})
    const url = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const filteredData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({
        view: profileView.success,
        name: filteredData.name,
        description: filteredData.shortBio,
        profileImage: filteredData.profileImageUrl,
      })
    } else {
      this.setState({view: profileView.failure})
    }
  }

  renderSuccess = () => {
    const {name, description, profileImage} = this.state
    return (
      <div className="profile-container">
        <img src={profileImage} className="profile-img" alt="profile" />
        <h3 className="profile-head">{name}</h3>
        <p className="profile-bio">{description}</p>
      </div>
    )
  }

  renderLoading = () => (
    <div className="profile-loading-container">
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </div>
  )

  renderFailure = () => (
    <div className="profile-loading-container">
      <button className="retry-btn" type="button" onClick={this.getProfile}>
        Retry
      </button>
    </div>
  )

  render() {
    const {view} = this.state
    switch (view) {
      case profileView.success:
        return this.renderSuccess()
      case profileView.failure:
        return this.renderFailure()
      case profileView.loading:
        return this.renderLoading()
      default:
        return null
    }
  }
}

export default Profile

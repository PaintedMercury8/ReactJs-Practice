import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header/index'
import AppContext from '../../context/AppContext'
import GamingVideosItem from '../GamingVideosItem/index'
import {
  GamingBgContainer,
  GamingBottomContainer,
  GamingMainContainer,
  GamingBannerContainer,
  GamingTrendingContainerIcon,
  GamingBannerHead,
  GamingLoadingContainer,
  GamingSuccessContainer,
  GamingNoVideosImg,
  GamingNoVideosHead,
  GamingNoVideosPara,
  GamingNoVideosRetry,
} from './styledComponents'
import NavigationSidebar from '../NavigationSidebar/index'

const displayViews = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  noSearch: 'NOSEARCH',
}

class Gaming extends Component {
  state = {
    currentView: displayViews.initial,
    videosData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({currentView: displayViews.loading})
    const url = `https://apis.ccbp.in/videos/gaming`
    const jwtToken = Cookie.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const {videos, total} = data
      const filteredData = videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      if (total > 0) {
        this.setState({
          videosData: filteredData,
          currentView: displayViews.success,
        })
      } else {
        this.setState({videosData: [], currentView: displayViews.noSearch})
      }
    } else {
      this.setState({currentView: displayViews.failure})
    }
  }

  renderBanner = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GamingBannerContainer isDark={isDark} data-testid="banner">
            <GamingTrendingContainerIcon isDark={isDark}>
              <SiYoutubegaming />
            </GamingTrendingContainerIcon>
            <GamingBannerHead isDark={isDark}>Gaming</GamingBannerHead>
          </GamingBannerContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderSuccess = () => {
    const {videosData} = this.state
    return (
      <>
        {this.renderBanner()}
        <GamingSuccessContainer>
          {videosData.map(eachItem => (
            <GamingVideosItem data={eachItem} key={eachItem.id} />
          ))}
        </GamingSuccessContainer>
      </>
    )
  }

  renderLoading = () => (
    <GamingLoadingContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </GamingLoadingContainer>
  )

  renderFailure = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GamingLoadingContainer>
            {' '}
            <GamingNoVideosImg
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <GamingNoVideosHead isDark={isDark}>
              Oops! Something Went Wrong
            </GamingNoVideosHead>
            <GamingNoVideosPara isDark={isDark}>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </GamingNoVideosPara>
            <GamingNoVideosRetry onClick={this.getData}>
              Retry
            </GamingNoVideosRetry>
          </GamingLoadingContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderView = () => {
    const {currentView} = this.state

    switch (currentView) {
      case displayViews.success:
        return this.renderSuccess()
      case displayViews.loading:
        return this.renderLoading()
      case displayViews.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GamingBgContainer>
              <Header />
              <GamingBottomContainer>
                <NavigationSidebar />
                <GamingMainContainer isDark={isDark} data-testid="gaming">
                  {this.renderView()}
                </GamingMainContainer>
              </GamingBottomContainer>
            </GamingBgContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming

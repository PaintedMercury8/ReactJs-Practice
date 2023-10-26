import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header/index'
import AppContext from '../../Context/AppContext'
import TrendingVideosItem from '../TrendingVideosItem/index'
import {
  TrendingBgContainer,
  TrendingBottomContainer,
  TrendingMainContainer,
  TrendingBannerContainer,
  TrendingTrendingContainerIcon,
  TrendingBannerHead,
  TrendingLoadingContainer,
  TrendingSuccessContainer,
  TrendingNoVideosImg,
  TrendingNoVideosHead,
  TrendingNoVideosPara,
  TrendingNoVideosRetry,
} from './styledComponents'
import NavigationSidebar from '../NavigationSidebar/index'

const displayViews = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  noSearch: 'NOSEARCH',
}

class Trending extends Component {
  state = {
    currentView: displayViews.initial,
    videosData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({currentView: displayViews.loading})
    const url = `https://apis.ccbp.in/videos/trending`
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
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
          <TrendingBannerContainer isDark={isDark} data-testid="banner">
            <TrendingTrendingContainerIcon isDark={isDark}>
              <HiFire />
            </TrendingTrendingContainerIcon>
            <TrendingBannerHead isDark={isDark}>Trending</TrendingBannerHead>
          </TrendingBannerContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderSuccess = () => (
    <AppContext.Consumer>
      {() => {
        const {videosData} = this.state
        return (
          <>
            {this.renderBanner()}
            <TrendingSuccessContainer>
              {videosData.map(eachItem => (
                <TrendingVideosItem data={eachItem} key={eachItem.id} />
              ))}
            </TrendingSuccessContainer>
          </>
        )
      }}
    </AppContext.Consumer>
  )

  renderLoading = () => (
    <TrendingLoadingContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </TrendingLoadingContainer>
  )

  renderFailure = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendingLoadingContainer>
            {' '}
            <TrendingNoVideosImg
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <TrendingNoVideosHead isDark={isDark}>
              Oops! Something Went Wrong
            </TrendingNoVideosHead>
            <TrendingNoVideosPara isDark={isDark}>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </TrendingNoVideosPara>
            <TrendingNoVideosRetry onClick={this.getData}>
              Retry
            </TrendingNoVideosRetry>
          </TrendingLoadingContainer>
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
            <TrendingBgContainer>
              <Header />
              <TrendingBottomContainer>
                <NavigationSidebar />
                <TrendingMainContainer isDark={isDark} data-testid="trending">
                  {this.renderView()}
                </TrendingMainContainer>
              </TrendingBottomContainer>
            </TrendingBgContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending

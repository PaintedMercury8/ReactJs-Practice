import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header/index'
import VideoItem from '../VideoItem/index'

import {
  HomeBgContainer,
  HomeBottomContainer,
  HomeMainContainer,
  HomeBannerContainer,
  BannerLogoAndCloseContainer,
  BannerLogo,
  BannerCloseBtn,
  BannerHomeDescription,
  BannerHomeButton,
  SearchInputContainer,
  SearchHomeElement,
  HomeVideosContainer,
  SearchHomeIcon,
  HomeLoadingContainer,
  HomeSuccessContainer,
  HomeNoVideosImg,
  HomeNoVideosHead,
  HomeNoVideosPara,
  HomeNoVideosRetry,
} from './styledComponents'
import AppContext from '../../Context/AppContext'
import NavigationSidebar from '../NavigationSidebar/index'

const displayViews = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  noSearch: 'NOSEARCH',
}

class Home extends Component {
  state = {
    currentView: displayViews.initial,
    bannerPresent: true,
    searchText: '',
    videosData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({currentView: displayViews.loading})
    const {searchText} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
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

  onClickCloseBanner = () => {
    this.setState({bannerPresent: false})
  }

  renderBanner = () => (
    <HomeBannerContainer data-testid="banner">
      <BannerLogoAndCloseContainer>
        <BannerLogo
          img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerCloseBtn
          type="button"
          data-testid="close"
          onClick={this.onClickCloseBanner}
        >
          <IoMdClose />
        </BannerCloseBtn>
      </BannerLogoAndCloseContainer>
      <BannerHomeDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerHomeDescription>
      <BannerHomeButton>GET IT NOW</BannerHomeButton>
    </HomeBannerContainer>
  )

  changeSearchInput = event => {
    this.setState({searchText: event.target.value})
  }

  renderSuccess = () => {
    const {videosData} = this.state
    return (
      <HomeSuccessContainer>
        {videosData.map(eachItem => (
          <VideoItem data={eachItem} key={eachItem.id} />
        ))}
      </HomeSuccessContainer>
    )
  }

  renderLoading = () => (
    <HomeLoadingContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </HomeLoadingContainer>
  )

  renderNoSearch = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <HomeLoadingContainer>
            <HomeNoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HomeNoVideosHead isDark={isDark}>
              No Search results found
            </HomeNoVideosHead>
            <HomeNoVideosPara isDark={isDark}>
              Try different key words or remove search filter
            </HomeNoVideosPara>
            <HomeNoVideosRetry onClick={this.getData}>Retry</HomeNoVideosRetry>
          </HomeLoadingContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderFailure = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <HomeLoadingContainer>
            <HomeNoVideosImg
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <HomeNoVideosHead isDark={isDark}>
              Oops! Something Went Wrong
            </HomeNoVideosHead>
            <HomeNoVideosPara isDark={isDark}>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </HomeNoVideosPara>
            <HomeNoVideosRetry onClick={this.getData}>Retry</HomeNoVideosRetry>
          </HomeLoadingContainer>
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
      case displayViews.noSearch:
        return this.renderNoSearch()
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
          const {bannerPresent, searchText} = this.state
          return (
            <HomeBgContainer>
              <Header />
              <HomeBottomContainer>
                <NavigationSidebar />
                <HomeMainContainer isDark={isDark}>
                  {bannerPresent && this.renderBanner()}
                  <HomeVideosContainer data-testid="home" isDark={isDark}>
                    <SearchInputContainer>
                      <SearchHomeElement
                        type="search"
                        onChange={this.changeSearchInput}
                        value={searchText}
                        placeholder="Search"
                      />
                      <SearchHomeIcon
                        data-testid="searchButton"
                        type="button"
                        isDark={isDark}
                        onClick={this.getData}
                      >
                        <BiSearchAlt2 />
                      </SearchHomeIcon>
                    </SearchInputContainer>
                    {this.renderView()}
                  </HomeVideosContainer>
                </HomeMainContainer>
              </HomeBottomContainer>
            </HomeBgContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home

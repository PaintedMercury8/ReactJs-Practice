import {Component} from 'react'

import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header/index'
import AppContext from '../../context/AppContext'
import TrendingVideosItem from '../TrendingVideosItem/index'
import {
  SavedVideosBgContainer,
  SavedVideosBottomContainer,
  SavedVideosMainContainer,
  SavedVideosBannerContainer,
  SavedVideosTrendingContainerIcon,
  SavedVideosBannerHead,
  SavedVideosLoadingContainer,
  SavedVideosSuccessContainer,
  SavedVideosNoVideosImg,
  SavedVideosNoVideosHead,
  SavedVideosNoVideosPara,
} from './styledComponents'
import NavigationSidebar from '../NavigationSidebar/index'

class SavedVideos extends Component {
  renderBanner = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SavedVideosBannerContainer isDark={isDark} data-testid="banner">
            <SavedVideosTrendingContainerIcon isDark={isDark}>
              <CgPlayListAdd />
            </SavedVideosTrendingContainerIcon>
            <SavedVideosBannerHead isDark={isDark}>
              Saved Videos
            </SavedVideosBannerHead>
          </SavedVideosBannerContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderSuccess = () => (
    <AppContext.Consumer>
      {value => {
        const {savedVideos} = value
        return (
          <>
            {this.renderBanner()}
            <SavedVideosSuccessContainer>
              {savedVideos.map(eachItem => (
                <TrendingVideosItem data={eachItem} key={eachItem.id} />
              ))}
            </SavedVideosSuccessContainer>
          </>
        )
      }}
    </AppContext.Consumer>
  )

  renderNoVideos = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SavedVideosLoadingContainer>
            <SavedVideosNoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <SavedVideosNoVideosHead isDark={isDark}>
              No saved videos found
            </SavedVideosNoVideosHead>
            <SavedVideosNoVideosPara isDark={isDark}>
              You can save your videos while watching them
            </SavedVideosNoVideosPara>
          </SavedVideosLoadingContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderView = () => (
    <AppContext.Consumer>
      {value => {
        const {savedVideos} = value
        if (savedVideos.length > 0) {
          return this.renderSuccess()
        }
        return this.renderNoVideos()
      }}
    </AppContext.Consumer>
  )

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SavedVideosBgContainer>
              <Header />
              <SavedVideosBottomContainer>
                <NavigationSidebar />
                <SavedVideosMainContainer
                  isDark={isDark}
                  data-testid="savedVideos"
                >
                  {this.renderView()}
                </SavedVideosMainContainer>
              </SavedVideosBottomContainer>
            </SavedVideosBgContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default SavedVideos

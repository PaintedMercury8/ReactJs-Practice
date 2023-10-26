import {Component} from 'react'

import {CgPlayListAdd} from 'react-icons/cg'

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
} from './styledComponents'
import NavigationSidebar from '../NavigationSidebar/index'

class SavedVideos extends Component {
  renderBanner = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendingBannerContainer isDark={isDark} data-testid="banner">
            <TrendingTrendingContainerIcon isDark={isDark}>
              <CgPlayListAdd />
            </TrendingTrendingContainerIcon>
            <TrendingBannerHead isDark={isDark}>
              Saved Videos
            </TrendingBannerHead>
          </TrendingBannerContainer>
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
            <TrendingSuccessContainer>
              {savedVideos.map(eachItem => (
                <TrendingVideosItem data={eachItem} key={eachItem.id} />
              ))}
            </TrendingSuccessContainer>
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
          <TrendingLoadingContainer>
            <TrendingNoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <TrendingNoVideosHead isDark={isDark}>
              No saved videos found
            </TrendingNoVideosHead>
            <TrendingNoVideosPara isDark={isDark}>
              You can save your videos while watching them
            </TrendingNoVideosPara>
          </TrendingLoadingContainer>
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
            <TrendingBgContainer>
              <Header />
              <TrendingBottomContainer>
                <NavigationSidebar />
                <TrendingMainContainer
                  isDark={isDark}
                  data-testid="savedVideos"
                >
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

export default SavedVideos

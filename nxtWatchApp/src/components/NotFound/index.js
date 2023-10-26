import AppContext from '../../Context/AppContext'
import Header from '../Header/index'
import NavigationSidebar from '../NavigationSidebar/index'
import {
  NotFoundContainer,
  NotFoundBottomContainer,
  NotFoundMainContainer,
  TrendingLoadingContainer,
  TrendingNoVideosImg,
  TrendingNoVideosHead,
  TrendingNoVideosPara,
} from './styledComponents'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <NotFoundContainer>
          <Header />
          <NotFoundBottomContainer>
            <NavigationSidebar />
            <NotFoundMainContainer isDark={isDark}>
              <TrendingLoadingContainer>
                <TrendingNoVideosImg
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <TrendingNoVideosHead isDark={isDark}>
                  Page Not Found
                </TrendingNoVideosHead>
                <TrendingNoVideosPara isDark={isDark}>
                  We are sorry, the page you requested could not be found
                </TrendingNoVideosPara>
              </TrendingLoadingContainer>
            </NotFoundMainContainer>
          </NotFoundBottomContainer>
        </NotFoundContainer>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound

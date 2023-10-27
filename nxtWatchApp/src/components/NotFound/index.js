import AppContext from '../../context/AppContext'
import Header from '../Header/index'
import NavigationSidebar from '../NavigationSidebar/index'
import {
  NotFoundContainer,
  NotFoundBottomContainer,
  NotFoundMainContainer,
  NotFoundLoadingContainer,
  NotFoundNoVideosImg,
  NotFoundNoVideosHead,
  NotFoundNoVideosPara,
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
              <NotFoundLoadingContainer>
                <NotFoundNoVideosImg
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <NotFoundNoVideosHead isDark={isDark}>
                  Page Not Found
                </NotFoundNoVideosHead>
                <NotFoundNoVideosPara isDark={isDark}>
                  We are sorry, the page you requested could not be found
                </NotFoundNoVideosPara>
              </NotFoundLoadingContainer>
            </NotFoundMainContainer>
          </NotFoundBottomContainer>
        </NotFoundContainer>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound

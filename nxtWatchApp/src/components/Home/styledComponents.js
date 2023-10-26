import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const HomeBottomContainer = styled.div`
  height: 93%;
  display: flex;
  justify-content: stretch;
  flex-grow: 1;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const HomeMainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const HomeVideosContainer = styled.div`
  padding: 3%;
  width: 100%;
  overflow-y: auto;
  flex-grow: 1;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const HomeBannerContainer = styled.div`
  width: 100%;
  height: 30%;
  flex-shrink: 0;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`

export const BannerLogoAndCloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const BannerLogo = styled.img`
  width: 150px;
  height: 40px;
`

export const BannerCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  font-size: 30px;
  color: #010101;
  cursor: pointer;
  outline: none;
`

export const BannerHomeDescription = styled.p`
  color: #010101
  font-size:20px;
  margin-bottom:auto;
`

export const BannerHomeButton = styled.button`
  background-color: transparent;
  border: 2px solid #010101;
  width: 120px;
  height: 40px;
  cursor: pointer;
  outline: none;
`

export const SearchInputContainer = styled.div`
  width: 50%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  border: 1px solid ${props => (props.isDark ? '#3b393b' : '#c5c5c6')};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const SearchHomeElement = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  padding-left: 3%;
  color: ${props => (props.isDark ? '#3b393b' : '#c5c5c6')};
`

export const SearchHomeIcon = styled.button`
  width: 30%;
  border: none;
  font-size: 25px;
  padding-top: 5px;
  color: ${props => (props.isDark ? '#c5c5c6' : '#3b393b')};
  border-left: 3px solid ${props => (props.isDark ? '#3b393b' : '#c5c5c6')};
  background-color: ${props => (props.isDark ? '#2b2a2b' : '#f2f2f2')};
  cursor: pointer;
  outline: none;
`

export const HomeLoadingContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const HomeSuccessContainer = styled(HomeLoadingContainer)`
  flex-grow: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
`
export const HomeNoVideosImg = styled.img`
  width: 30%;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`

export const HomeNoVideosHead = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDark ? '#f2f2f2' : '#010101')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const HomeNoVideosPara = styled.p`
  font-size: 20px;
  color: ${props => (props.isDark ? '#667b90' : '#010101')};
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

export const HomeNoVideosRetry = styled.button`
  width: 120px;
  height: 40px;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`

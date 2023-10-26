import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const NotFoundBottomContainer = styled.div`
  height: 93%;
  display: flex;
  justify-content: stretch;
  flex-grow: 1;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const NotFoundMainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
`

export const TrendingLoadingContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendingNoVideosImg = styled.img`
  width: 30%;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`

export const TrendingNoVideosHead = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDark ? '#f2f2f2' : '#010101')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const TrendingNoVideosPara = styled.p`
  font-size: 20px;
  color: ${props => (props.isDark ? '#667b90' : '#010101')};
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

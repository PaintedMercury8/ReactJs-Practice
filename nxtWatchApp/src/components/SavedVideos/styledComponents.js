import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const SavedVideosBottomContainer = styled.div`
  height: 93%;
  display: flex;
  justify-content: stretch;
  flex-grow: 1;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const SavedVideosMainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
`

export const SavedVideosBannerContainer = styled.div`
  width: 100%;
  height: 20%;
  flex-shrink: 0;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isDark ? '#1f201c' : '#ffffff')};
  @media screen and (max-width: 767px) {
    height: 120px;
  }
`

export const SavedVideosTrendingContainerIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#111111' : '#dde4ed')};
  font-size: 40px;
  color: #fa2a26;
  padding-left: 5px;
  padding-top: 5px;
  @media screen and (max-width: 767px) {
    height: 80px;
    width: 80px;
    margin-left: 15px;
  }
`
export const SavedVideosBannerHead = styled.h1`
  font-size: 30px;
  margin-left: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#010101')};
`
export const SavedVideosLoadingContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SavedVideosSuccessContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
  padding: 3%;
`
export const SavedVideosNoVideosImg = styled.img`
  width: 30%;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`

export const SavedVideosNoVideosHead = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDark ? '#f2f2f2' : '#010101')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const SavedVideosNoVideosPara = styled.p`
  font-size: 20px;
  color: ${props => (props.isDark ? '#667b90' : '#010101')};
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const ItemDetailsBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ItemDetailsBottomContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: stretch;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const ItemDetailsMainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  padding-bottom: 50px;
`

export const ItemDetailsLoadingContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 50%;
  flex-shrink: 0;
  @media screen and (max-width: 767px) {
    height: 35%;
  }
`

export const VideoPlayerTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#010101;')};
  margin-top: 40px;
  margin-left: 10px;
  font-size: 20px;
`

export const DotIcon = styled(BsDot)`
  padding-top: 8px;
  font-size: 20px;
`

export const VideoPlayerItemSpan = styled.span`
  color: ${props => (props.isDark ? '#ffffff' : '#010101')};
`
export const VideoPlayerItemName = styled.p`
  color: #616a6c;
  text-align: left;
  margin-left: 10px;
`
export const VideoPlayerLikeAndData = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const VideoPLayerLikeAndSaveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 10px;
  color: ${props => (props.status === 'LIKE' ? '#2563eb' : '#64748b')};
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const LikeDisLikeText = styled.span`
  margin-left: 10px;
`

export const DisLikeButton = styled(LikeButton)`
  color: ${props => (props.status === 'DISLIKE' ? '#2563eb' : '#64748b')};
`

export const SaveBtn = styled(LikeButton)`
  color: ${props => (props.isPresent ? '#2563eb' : '#64748b')};
`

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 0.5px solid #64748b;
`

export const VideoItemChannelDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 25px;
`
export const VideoItemChannelLogo = styled.img`
  width: 60px;
`

export const VideoItemDescriptionLg = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const ChannelNameSubscribers = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelNamePara = styled.p`
  font-size: 20px;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#010101;')};
`

export const ChannelSubscribersPara = styled.p`
  font-size: 15px;
  color: #64748b;
`

export const ChannelDescriptionPara = styled.p`
  font-size: 15px;
  color: #ffffff;
  color: ${props => (props.isDark ? '#ffffff' : '#010101;')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ChannelDescriptionParaSm = styled(ChannelDescriptionPara)`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    font-size: 12px;
  }
`

export const VideoDetailsNoVideosImg = styled.img`
  width: 30%;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`
export const VideoDetailsNoVideosHead = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDark ? '#f2f2f2' : '#010101')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const VideoDetailsNoVideosPara = styled.p`
  font-size: 20px;
  color: ${props => (props.isDark ? '#667b90' : '#010101')};
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

export const VideoDetailsNoVideosRetry = styled.button`
  width: 120px;
  height: 40px;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`

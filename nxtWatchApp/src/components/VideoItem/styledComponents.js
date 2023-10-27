import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const VideoItemLinkContainer = styled(Link)`
  text-decoration: none;
  width: 28%;
  margin-right: 2%;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    width: 45%;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const VideoItemMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

export const VideoItemImg = styled.img`
  width: 100%;
`

export const VideoItemDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`

export const VideoItemChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`
export const VideoItemDataDisplay = styled.div``

export const VideoItemTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#010101;')};
  margin-top: 0px;
`

export const VideoItemName = styled.p`
  color: #616a6c;
  text-align: left;
  margin-left: 10px;
`

export const VideoItemSpan = styled.span`
  color: ${props => (props.isDark ? '#616a6c' : '#010101')};
`
export const VideoItemDotIcon = styled(BsDot)`
  padding-top: 8px;
  font-size: 20px;
`

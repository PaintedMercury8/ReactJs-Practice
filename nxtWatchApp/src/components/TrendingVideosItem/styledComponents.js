import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const TrendingItemLinkContainer = styled(Link)`
  text-decoration: none;
  width: 100%;
  margin-right: 2%;
  margin-bottom: 30px;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const TrendingItemMainContainer = styled.li`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  width: 100%;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const TrendingItemImg = styled.img`
  width: 300px;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const TrendingItemDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`

export const TrendingItemChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`
export const TrendingItemDataDisplay = styled.div``

export const TrendingItemTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#010101;')};
  margin-top: 0px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
`

export const TrendingItemName = styled.p`
  color: #616a6c;
  text-align: left;
  margin-left: 10px;
`

export const TrendingItemSpan = styled.span`
  color: '#ffffff';
`
export const TrendingDotIcon = styled(BsDot)`
  padding-top: 8px;
  font-size: 20px;
`

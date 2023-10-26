import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const GamingItemLinkContainer = styled(Link)`
  text-decoration: none;
  width: 20%;
  margin-right: 2%;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    width: 45%;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const GamingItemMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

export const GamingItemImg = styled.img`
  width: 100%;
`

export const GamingItemDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`

export const GamingItemDataDisplay = styled.div``

export const GamingItemTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#010101;')};
  margin-top: 0px;
  text-align: left;
`

export const GamingItemName = styled.p`
  color: #616a6c;
  text-align: left;
`
export const GamingItemDate = styled.div`
  display: flex;
  align-items: center;
`

export const GamingDotContainer = styled.div``

export const GamingItemSpan = styled.span`
  color: #010101;
`
export const DotIcon = styled(BsDot)`
  padding-top: 8px;
  font-size: 20px;
`

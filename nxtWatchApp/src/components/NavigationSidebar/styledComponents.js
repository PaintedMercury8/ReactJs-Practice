import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.ul`
  width: 23%;
  height: 100%;
  list-style-type: none;
  padding-left: 0px;
  background-color: ${props => (props.isDark ? '#1f201c' : '#ffffff')};
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0px;
  flex-shrink: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SideBarTop = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  background-color: transparent;
`

export const SidebarElementsContainer = styled.li`
  margin-top: 30px;
  background-color: transparent;
  @media screen and (max-width: 767px) {
    display: none;
  } ;
`

export const SideBarContactContainer = styled(SidebarElementsContainer)`
  width: 100%;
  padding-left: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  } ;
`

export const SidebarElements = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: ${props => (props.isDark ? '#ffffff' : '#909090')};
  background-color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.isDark
      ? props.isTrue
        ? '#313131'
        : '#1f201c'
      : props.isTrue
      ? '#f2f6f8'
      : '#ffffff'};
`

export const LinkElement = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  outline: none;
`

export const IconContainer = styled.div`
  font-size: 30px;
  color: ${props => (props.isTrue ? '#ff0b37' : '#909090')};
  margin-left: 30px;
`

export const NavigationSidebarText = styled.p`
  margin-left: 30px;
`

export const NavBtn = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  outline: none;
`
export const ContactUsHead = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${props => (props.isDark ? '#ffffff' : '#909090')};
`

export const ContactIconContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ContactIconImg = styled.img`
  height: 43px;
  width: 43px;
  margin-right: 15px;
`
export const ContactUsDescription = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: ${props => (props.isDark ? '#ffffff' : '#909090')};
`

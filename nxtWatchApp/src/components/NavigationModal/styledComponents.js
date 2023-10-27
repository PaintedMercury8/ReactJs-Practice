import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainerSm = styled.ul`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    height: 35%;
    width: 100%;
    list-style-type: none;
    padding-left: 0px;
    background-color: ${props => (props.isDark ? '#1f201c' : '#ffffff')};
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const SidebarElementsContainerSm = styled.li`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    width: 100%;
    background-color: transparent;
  } ;
`

export const SideBarTopSm = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  background-color: transparent;
`

export const SidebarElementsSm = styled.li`
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

export const LinkElementSm = styled(Link)`
  text-decoration: none;
`

export const IconContainerSm = styled.div`
  font-size: 30px;
  color: ${props => (props.isTrue ? '#ff0b37' : '#909090')};
  margin-left: 30px;
`

export const NavigationSidebarTextSm = styled.p`
  margin-left: 30px;
  color: ${props => (props.isDark ? '#ffffff' : '#909090')};
`

export const NavBtnSm = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  outline: none;
`

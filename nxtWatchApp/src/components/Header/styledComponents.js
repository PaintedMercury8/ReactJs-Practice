import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 100%;
  padding: 15px;
  padding-left: 5%;
  padding-right: 5%;
  background-color: ${props => (props.isDark ? '#1f201c' : '#ffffff')};
  margin-top: 0px;
  margin-bottom: 0px;
`

export const HeaderLogo = styled.img`
  width: 80px;
`

export const HeaderListItem = styled.li``

export const HeaderListItemLg = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HeaderListItemSm = styled.li`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LightDarkBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 30px;
  margin-top: 6px;
  cursor: pointer;
`
export const ProfileImg = styled.img`
  width: 30px;
  margin-right: 40px;
  margin-left: 40px;
`

export const LogoutButton = styled.button`
  width: 100px;
  font-size: 20px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  margin-right: 40px;
  cursor: pointer;
`

export const LogoutButtonSm = styled.button`
  color: ${props => (props.isDark ? '#ffffff' : '#010101')};
  font-size: 30px;
  background-color: transparent;
  border: none;
`

export const Modal = styled(Popup)`
  &-content {
    width: 300px;
    padding: 20px;
    background-color: ${props => (props.isDark ? '#1f201c' : '#ffffff')};
    border: none;
  }
`

export const ModalNav = styled(Popup)`
  &-content {
    width: 100vw;
    height: 100vh;
    padding-top: 20px;
    background-color: ${props => (props.isDark ? '#1f201c' : '#ffffff')};
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CancelButton = styled(LogoutButton)`
  font-size: 15px;
  margin-right: 20px;
  height: 30px;
  cursor: pointer;
`
export const ConfirmButton = styled(LogoutButton)`
  font-size: 15px;
  background-color: #3b82f6;
  color: #ffffff;
  margin-right: 0px;
  height: 30px;
  border: none;
  cursor: pointer;
`
export const LogoutMessage = styled.p`
  text-align: center;
  font-size: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#1f201c')};
`

export const ModalNavContent = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

export const ModalContentCLose = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  font-size: 30px;
  color: ${props => (props.isDark ? '#ffffff' : '#909090')};
  cursor: pointer;
  outline: none;
`

export const HeaderLinkHome = styled(Link)`
  text-decoration: none;
`

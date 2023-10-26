import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {CgDarkMode} from 'react-icons/cg'
import {BsList} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import NavigationModal from '../NavigationModal/index'
import 'reactjs-popup/dist/index.css'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderListItem,
  HeaderListItemLg,
  HeaderListItemSm,
  LightDarkBtn,
  ProfileImg,
  LogoutButton,
  Modal,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  ContentContainer,
  LogoutMessage,
  LogoutButtonSm,
  ModalNav,
  ModalNavContent,
  ModalContentCLose,
  HeaderLinkHome,
} from './styledComponents'
import AppContext from '../../Context/AppContext'

const Header = props => (
  <AppContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value

      const changeCurrentTheme = () => {
        changeTheme()
      }

      const changeCurrentActiveSideBar = () => {}

      const logoutApp = () => {
        const {history} = props
        Cookie.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer isDark={isDark}>
          <HeaderListItem>
            <HeaderLinkHome to="/">
              <HeaderLogo
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </HeaderLinkHome>
          </HeaderListItem>
          <HeaderListItemLg>
            <LightDarkBtn
              type="button"
              isDark={isDark}
              onClick={changeCurrentTheme}
              data-testid="theme"
            >
              {isDark ? <FiSun color="#ffffff" /> : <CgDarkMode />}
            </LightDarkBtn>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Modal
              trigger={<LogoutButton isDark={isDark}>Logout</LogoutButton>}
              position="top left"
              isDark={isDark}
              modal
            >
              {close => (
                <ContentContainer>
                  <LogoutMessage isDark={isDark}>
                    Are you sure, you want to logout?
                  </LogoutMessage>
                  <ButtonContainer>
                    <CancelButton type="button" onClick={close} isDark={isDark}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton
                      type="button"
                      isDark={isDark}
                      onClick={logoutApp}
                    >
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ContentContainer>
              )}
            </Modal>
          </HeaderListItemLg>
          <HeaderListItemSm>
            <LightDarkBtn
              type="button"
              isDark={isDark}
              onClick={changeCurrentTheme}
              data-testid="theme"
            >
              {isDark ? <FiSun color="#ffffff" /> : <CgDarkMode />}
            </LightDarkBtn>
            <ModalNav
              trigger={
                <LogoutButtonSm
                  isDark={isDark}
                  onClick={changeCurrentActiveSideBar}
                >
                  <BsList />
                </LogoutButtonSm>
              }
              position="top left"
              isDark={isDark}
              modal
            >
              {close => (
                <>
                  <ModalContentCLose onClick={close} isDark={isDark}>
                    <IoMdClose />
                  </ModalContentCLose>
                  <ModalNavContent>
                    <NavigationModal />
                  </ModalNavContent>
                </>
              )}
            </ModalNav>
            <Modal
              trigger={
                <LogoutButtonSm isDark={isDark}>
                  <FiLogOut />
                </LogoutButtonSm>
              }
              position="top left"
              isDark={isDark}
              modal
            >
              {close => (
                <ContentContainer>
                  <LogoutMessage isDark={isDark}>
                    Are you sure, you want to logout?
                  </LogoutMessage>
                  <ButtonContainer>
                    <CancelButton type="button" onClick={close} isDark={isDark}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton
                      type="button"
                      isDark={isDark}
                      onClick={logoutApp}
                    >
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ContentContainer>
              )}
            </Modal>
          </HeaderListItemSm>
        </HeaderContainer>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(Header)

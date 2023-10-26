import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {
  SidebarContainer,
  SidebarElements,
  LinkElement,
  IconContainer,
  SideBarTop,
  SidebarElementsContainer,
  NavigationSidebarText,
  NavBtn,
  SideBarContactContainer,
  ContactUsHead,
  ContactIconContainer,
  ContactIconImg,
  ContactUsDescription,
} from './styledComponents'
import AppContext from '../../Context/AppContext'

const sideBarContents = [
  {
    id: 1,
    logo: <AiFillHome />,
    text: 'Home',
    path: '/',
  },
  {
    id: 2,
    logo: <HiFire />,
    text: 'Trending',
    path: '/trending',
  },
  {
    id: 3,
    logo: <SiYoutubegaming />,
    text: 'Gaming',
    path: '/gaming',
  },
  {
    id: 4,
    logo: <CgPlayListAdd />,
    text: 'Saved Videos',
    path: '/saved-videos',
  },
]

class NavigationSidebar extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          const {match} = this.props
          const {path} = match

          return (
            <>
              <SidebarContainer isDark={isDark}>
                <SidebarElementsContainer>
                  <SideBarTop isDark={isDark}>
                    {sideBarContents.map(eachItem => (
                      <LinkElement to={eachItem.path} key={eachItem.id}>
                        <NavBtn>
                          <SidebarElements
                            isTrue={path === eachItem.path}
                            isDark={isDark}
                          >
                            <IconContainer isTrue={path === eachItem.path}>
                              {eachItem.logo}
                            </IconContainer>
                            <NavigationSidebarText>
                              {eachItem.text}
                            </NavigationSidebarText>
                          </SidebarElements>
                        </NavBtn>
                      </LinkElement>
                    ))}
                  </SideBarTop>
                </SidebarElementsContainer>
                <SideBarContactContainer>
                  <ContactUsHead isDark={isDark}>CONTACT US</ContactUsHead>
                  <ContactIconContainer>
                    <ContactIconImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <ContactIconImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <ContactIconImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactIconContainer>
                  <ContactUsDescription isDark={isDark}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactUsDescription>
                </SideBarContactContainer>
              </SidebarContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(NavigationSidebar)

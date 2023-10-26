import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {
  SidebarContainerSm,
  SidebarElements,
  LinkElement,
  IconContainer,
  SideBarTop,
  NavigationSidebarText,
  SidebarElementsContainerSm,
  NavBtn,
} from './styledComponents'
import AppContext from '../../Context/AppContext'

const sideBarContents = [
  {
    id: 5,
    logo: <AiFillHome />,
    text: 'Home',
    path: '/',
  },
  {
    id: 6,
    logo: <HiFire />,
    text: 'Trending',
    path: '/trending',
  },
  {
    id: 7,
    logo: <SiYoutubegaming />,
    text: 'Gaming',
    path: '/gaming',
  },
  {
    id: 8,
    logo: <CgPlayListAdd />,
    text: 'Saved Videos',
    path: '/saved-videos',
  },
]

class NavigationModal extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          const {match} = this.props
          const {path} = match
          const smSideBar = () => (
            <SidebarContainerSm isDark={isDark}>
              <SidebarElementsContainerSm>
                <SideBarTop isDark={isDark}>
                  {sideBarContents.map(eachItem => (
                    <LinkElement to={eachItem.path} key={eachItem.id}>
                      <SidebarElements
                        isTrue={path === eachItem.path}
                        isDark={isDark}
                      >
                        <NavBtn type="button">
                          <IconContainer isTrue={path === eachItem.path}>
                            {eachItem.logo}
                          </IconContainer>
                          <NavigationSidebarText isDark={isDark}>
                            {eachItem.text}
                          </NavigationSidebarText>
                        </NavBtn>
                      </SidebarElements>
                    </LinkElement>
                  ))}
                </SideBarTop>
              </SidebarElementsContainerSm>
            </SidebarContainerSm>
          )

          return <>{smSideBar()}</>
        }}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(NavigationModal)

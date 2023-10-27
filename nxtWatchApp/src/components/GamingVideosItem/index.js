import AppContext from '../../context/AppContext'
import {
  GamingItemLinkContainer,
  GamingItemMainContainer,
  GamingItemImg,
  GamingItemDescription,
  GamingItemDataDisplay,
  GamingItemTitle,
  GamingItemName,
} from './styledComponents'

const GamingVideosItem = props => (
  <>
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        const {data} = props
        const {id, title, thumbnailUrl, viewCount} = data
        return (
          <GamingItemLinkContainer to={`/videos/${id}`}>
            <GamingItemMainContainer>
              <GamingItemImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingItemDescription>
                <GamingItemDataDisplay>
                  <GamingItemTitle isDark={isDark}>{title}</GamingItemTitle>
                  <GamingItemName>
                    {viewCount} Watching Worldwide
                  </GamingItemName>
                </GamingItemDataDisplay>
              </GamingItemDescription>
            </GamingItemMainContainer>
          </GamingItemLinkContainer>
        )
      }}
    </AppContext.Consumer>
  </>
)

export default GamingVideosItem

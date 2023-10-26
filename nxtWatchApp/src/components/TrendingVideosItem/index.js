import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../Context/AppContext'
import {
  TrendingItemLinkContainer,
  TrendingItemMainContainer,
  TrendingItemImg,
  TrendingItemDescription,
  TrendingItemChannelLogo,
  TrendingItemDataDisplay,
  TrendingItemTitle,
  TrendingItemName,
  TrendingItemSpan,
  DotIcon,
} from './styledComponents'

const VideoItem = props => (
  <>
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        const {data} = props
        const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = data
        const {name, profileImageUrl} = channel
        const filteredDate = new Date(publishedAt)
        const suffixDate = formatDistanceToNow(filteredDate, {addSuffix: true})
        const dataArr = suffixDate.split(' ')
        dataArr.shift()
        const finalDate = dataArr.join(' ')
        return (
          <TrendingItemLinkContainer to={`/videos/${id}`}>
            <TrendingItemMainContainer>
              <TrendingItemImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingItemDescription>
                <TrendingItemChannelLogo
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingItemDataDisplay>
                  <TrendingItemTitle isDark={isDark}>{title}</TrendingItemTitle>
                  <TrendingItemName>{name}</TrendingItemName>

                  <TrendingItemName>
                    {viewCount} views{' '}
                    <TrendingItemSpan>
                      <DotIcon />
                    </TrendingItemSpan>{' '}
                    {finalDate}
                  </TrendingItemName>
                </TrendingItemDataDisplay>
              </TrendingItemDescription>
            </TrendingItemMainContainer>
          </TrendingItemLinkContainer>
        )
      }}
    </AppContext.Consumer>
  </>
)

export default VideoItem

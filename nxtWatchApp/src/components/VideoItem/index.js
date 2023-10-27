import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'
import {
  VideoItemLinkContainer,
  VideoItemMainContainer,
  VideoItemImg,
  VideoItemDescription,
  VideoItemChannelLogo,
  VideoItemDataDisplay,
  VideoItemTitle,
  VideoItemName,
  VideoItemSpan,
  VideoItemDotIcon,
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
          <VideoItemLinkContainer to={`/videos/${id}`}>
            <VideoItemMainContainer>
              <VideoItemImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemDescription>
                <VideoItemChannelLogo
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <VideoItemDataDisplay>
                  <VideoItemTitle isDark={isDark}>{title}</VideoItemTitle>
                  <VideoItemName>{name}</VideoItemName>

                  <VideoItemName>
                    {viewCount} views{' '}
                    <VideoItemSpan isDark={isDark}>
                      <VideoItemDotIcon />
                    </VideoItemSpan>{' '}
                    {finalDate}
                  </VideoItemName>
                </VideoItemDataDisplay>
              </VideoItemDescription>
            </VideoItemMainContainer>
          </VideoItemLinkContainer>
        )
      }}
    </AppContext.Consumer>
  </>
)

export default VideoItem

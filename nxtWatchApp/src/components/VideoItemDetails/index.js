import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import Header from '../Header/index'
import AppContext from '../../context/AppContext'
import NavigationSidebar from '../NavigationSidebar/index'
import {
  ItemDetailsBgContainer,
  ItemDetailsBottomContainer,
  ItemDetailsMainContainer,
  ItemDetailsLoadingContainer,
  VideoPlayerContainer,
  VideoPlayerTitle,
  VideoPlayerLikeAndData,
  VideoPlayerItemName,
  VideoPlayerItemSpan,
  ItemDetailsDotIcon,
  VideoPLayerLikeAndSaveContainer,
  LikeButton,
  LikeDisLikeText,
  DisLikeButton,
  SaveBtn,
  HorizontalLine,
  VideoItemChannelDetailsContainer,
  ItemDetailsVideoItemChannelLogo,
  VideoItemDescriptionLg,
  ChannelNameSubscribers,
  ChannelNamePara,
  ChannelSubscribersPara,
  ChannelDescriptionPara,
  ChannelDescriptionParaSm,
  VideoDetailsNoVideosImg,
  VideoDetailsNoVideosHead,
  VideoDetailsNoVideosPara,
  VideoDetailsNoVideosRetry,
} from './styledComponents'

const initialData = {
  id: '',
  title: '',
  videoUrl: '',
  thumbnailUrl: '',
  channel: {
    name: '',
    profileImageUrl: '',
    subscriberCount: '',
  },
  viewCount: '',
  publishedAt: '',
  description: '',
}

const displayViews = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoData: initialData,
    currentView: displayViews.initial,
    currentLikeStatus: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({currentView: displayViews.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookie.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const url = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(url, options)
    const data = await response.json()
    const received = data.video_details
    if (response.ok === true) {
      const filteredData = {
        id: received.id,
        title: received.title,
        videoUrl: received.video_url,
        thumbnailUrl: received.thumbnail_url,
        channel: {
          name: received.channel.name,
          profileImageUrl: received.channel.profile_image_url,
          subscriberCount: received.channel.subscriber_count,
        },
        viewCount: received.view_count,
        publishedAt: received.published_at,
        description: received.description,
      }
      this.setState({
        videoData: filteredData,
        currentView: displayViews.success,
      })
    } else {
      this.setState({currentView: displayViews.failure})
    }
  }

  changeLike = () => {
    this.setState({currentLikeStatus: 'LIKE'})
  }

  changeDislike = () => {
    this.setState({currentLikeStatus: 'DISLIKE'})
  }

  renderSuccess = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark, savedVideos, addOrRemoveVideo} = value
        const {videoData, currentLikeStatus} = this.state
        const {
          id,
          title,
          videoUrl,
          thumbnailUrl,
          channel,
          viewCount,
          publishedAt,
          description,
        } = videoData
        const {name, profileImageUrl, subscriberCount} = channel
        const filteredDate = new Date(publishedAt)
        const suffixDate = formatDistanceToNow(filteredDate, {addSuffix: true})
        const dataArr = suffixDate.split(' ')
        dataArr.shift()
        const finalDate = dataArr.join(' ')
        const changeSave = () => {
          const saveData = {
            id,
            title,
            thumbnailUrl,
            channel,
            viewCount,
            publishedAt,
          }
          addOrRemoveVideo(id, saveData)
        }
        const isPresent = savedVideos.some(eachItem => eachItem.id === id)
        return (
          <>
            <VideoPlayerContainer>
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </VideoPlayerContainer>
            <VideoPlayerTitle isDark={isDark}>{title}</VideoPlayerTitle>
            <VideoPlayerLikeAndData>
              <VideoPlayerItemName>
                {viewCount} views{' '}
                <VideoPlayerItemSpan isDark={isDark}>
                  <ItemDetailsDotIcon />
                </VideoPlayerItemSpan>{' '}
                {finalDate}
              </VideoPlayerItemName>
              <VideoPLayerLikeAndSaveContainer>
                <LikeButton
                  status={currentLikeStatus}
                  onClick={this.changeLike}
                  type="button"
                >
                  <BiLike /> Like
                </LikeButton>
                <DisLikeButton
                  status={currentLikeStatus}
                  onClick={this.changeDislike}
                  type="button"
                >
                  <BiDislike /> Dislike
                </DisLikeButton>
                <SaveBtn
                  type="button"
                  onClick={changeSave}
                  isPresent={isPresent}
                >
                  <RiPlayListAddLine />

                  {isPresent ? 'Saved' : 'Save'}
                </SaveBtn>
              </VideoPLayerLikeAndSaveContainer>
            </VideoPlayerLikeAndData>
            <HorizontalLine />
            <VideoItemChannelDetailsContainer>
              <ItemDetailsVideoItemChannelLogo
                src={profileImageUrl}
                alt="channel logo"
              />
              <VideoItemDescriptionLg>
                <ChannelNameSubscribers>
                  <ChannelNamePara isDark={isDark}>{name}</ChannelNamePara>
                  <ChannelSubscribersPara>
                    {subscriberCount} subscribers{' '}
                  </ChannelSubscribersPara>
                </ChannelNameSubscribers>
                <ChannelDescriptionPara isDark={isDark}>
                  {description}
                </ChannelDescriptionPara>
              </VideoItemDescriptionLg>
            </VideoItemChannelDetailsContainer>
            <ChannelDescriptionParaSm isDark={isDark}>
              {description}
            </ChannelDescriptionParaSm>
          </>
        )
      }}
    </AppContext.Consumer>
  )

  renderLoading = () => (
    <ItemDetailsLoadingContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </ItemDetailsLoadingContainer>
  )

  renderFailure = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <ItemDetailsLoadingContainer>
            {' '}
            <VideoDetailsNoVideosImg
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <VideoDetailsNoVideosHead isDark={isDark}>
              Oops! Something Went Wrong
            </VideoDetailsNoVideosHead>
            <VideoDetailsNoVideosPara isDark={isDark}>
              We are having some trouble to complete your request.
              <br /> Please try again.
            </VideoDetailsNoVideosPara>
            <VideoDetailsNoVideosRetry onClick={this.getData}>
              Retry
            </VideoDetailsNoVideosRetry>
          </ItemDetailsLoadingContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderView = () => {
    const {currentView} = this.state
    switch (currentView) {
      case displayViews.success:
        return this.renderSuccess()
      case displayViews.loading:
        return this.renderLoading()
      case displayViews.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <ItemDetailsBgContainer>
              <Header />
              <ItemDetailsBottomContainer>
                <NavigationSidebar />
                <ItemDetailsMainContainer
                  data-testid="videoItemDetails"
                  isDark={isDark}
                >
                  {this.renderView()}
                </ItemDetailsMainContainer>
              </ItemDetailsBottomContainer>
            </ItemDetailsBgContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails

// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchDetails: {
      teamBannerUrl: '',
      latestMatchDetails: {
        umpires: '',
        result: '',
        manOfTheMatch: '',
        id: '',
        date: '',
        venue: '',
        competingTeam: '',
        competingTeamLogo: '',
        firstInnings: '',
        secondInnings: '',
        matchStatus: '',
      },
      recentMatches: [],
    },
    isLoading: true,
  }

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getSpecificMatchDetails(id)
  }

  getSpecificMatchDetails = async id => {
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const filteredData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachItem => ({
        umpires: eachItem.umpires,
        result: eachItem.result,
        manOfTheMatch: eachItem.man_of_the_match,
        id: eachItem.id,
        date: eachItem.date,
        venue: eachItem.venue,
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        firstInnings: eachItem.first_innings,
        secondInnings: eachItem.second_innings,
        matchStatus: eachItem.match_status,
      })),
    }
    this.setState({teamMatchDetails: filteredData, isLoading: false})
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamMatchDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails
    const backgroundGradientContainer = `team-matches-container ${id}`
    return (
      <div className={backgroundGradientContainer}>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-matches-img-banner"
            />
            <div className="latest-match-container-para">
              <p className="latest-match">Latest Matches</p>
            </div>
            <LatestMatch data={latestMatchDetails} />
            <ul className="team-matches-unordered">
              {recentMatches.map(eachItem => (
                <MatchCard data={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches

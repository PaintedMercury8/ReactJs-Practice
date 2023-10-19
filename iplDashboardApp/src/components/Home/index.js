// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {teamsDisplay: [], isLoading: true}

  componentDidMount() {
    this.getTeamsCard()
  }

  getTeamsCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await response.json()
    const filteredData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsDisplay: filteredData, isLoading: false})
  }

  render() {
    const {teamsDisplay, isLoading} = this.state
    return (
      <div className="home-bg-container">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1 className="ipl-head">IPL Dashboard</h1>
            </div>
            <ul className="team-card-list">
              {teamsDisplay.map(eachItem => (
                <TeamCard key={eachItem.id} data={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home

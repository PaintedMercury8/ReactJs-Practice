// Write your code here
import './index.css'

const MatchCard = props => {
  const {data} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = data

  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatus === 'Lost' ? 'red' : 'green'}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

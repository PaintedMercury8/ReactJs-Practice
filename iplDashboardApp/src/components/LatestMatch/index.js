// Write your code here
import './index.css'

const LatestMatch = props => {
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
    <div className="latest-match-container">
      <div className="match-venue">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="img-container">
        <img
          src={competingTeamLogo}
          className="latest-match-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="innings-container">
        <hr className="line" />
        <p className="bold">First Innings</p>
        <p>{firstInnings}</p>
        <p className="bold">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="bold">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="bold">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

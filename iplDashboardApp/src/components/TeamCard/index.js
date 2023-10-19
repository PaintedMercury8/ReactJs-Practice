// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {data} = props
  const {name, id, teamImageUrl} = data
  return (
    <Link to={`/team-matches/${id}`} className="teams-card-items-link">
      <li className="teams-card-items">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

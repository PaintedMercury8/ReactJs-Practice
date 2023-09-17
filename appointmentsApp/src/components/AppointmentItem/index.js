// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {data, toggleStar} = props
  const {id, title, date, isStarred} = data

  const starUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const toggledStar = () => toggleStar(id)

  return (
    <li className="appItems">
      <div className="star-and-title">
        <p className="appTitle">{title}</p>
        <button
          className="star-btn"
          data-testid="star"
          type="button"
          onClick={toggledStar}
        >
          <img src={starUrl} className="star-img" alt="star" />
        </button>
      </div>
      <p className="appDate">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem

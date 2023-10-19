// Write your code here
import './index.css'

const EventItem = props => {
  const {data, onClickDetailsChange, isTrue} = props
  const {id, imageUrl, name, location, registrationStatus} = data

  const sendStatus = () => {
    onClickDetailsChange(registrationStatus, id)
  }

  return (
    <li className="event-item">
      <button type="button" className="btn" onClick={sendStatus}>
        <img
          src={imageUrl}
          alt="event"
          className={isTrue ? 'item-img img-outline' : 'item-img'}
        />
        <p className="event-list-item-head">{name}</p>
        <p className="event-list-item-para">{location}</p>
      </button>
    </li>
  )
}

export default EventItem

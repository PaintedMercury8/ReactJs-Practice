// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  const [icon, color, heading, description] = children
  return (
    <li className="list-container-item">
      <div className="notification-text">
        {icon}
        <div className="notification-description">
          <h2 className="head" style={{color: `${color}`}}>
            {heading}
          </h2>
          <p className="description">{description}</p>
        </div>
      </div>
      <GrFormClose className="icon" />
    </li>
  )
}

export default Notification

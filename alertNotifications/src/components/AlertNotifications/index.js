// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification/index'
import './index.css'

const data = [
  {
    id: 1,
    icon: <AiFillCheckCircle color="#2dca73" className="icon" />,
    color: '#2dca73',
    heading: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 2,
    icon: <RiErrorWarningFill color="#ff0b37" className="icon" />,
    color: '#ff0b37',
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 3,
    icon: <MdWarning color="#ffb800" className="icon" />,
    color: '#ffb800',
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    icon: <MdInfo color="#0f81e0" className="icon" />,
    color: '#0f81e0',
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div className="main-container">
    <h1>Alert Notifications</h1>
    <ul className="alert-notification-list">
      {data.map(eachItem => (
        <Notification key={eachItem.id}>
          {eachItem.icon}
          {eachItem.color}
          {eachItem.heading}
          {eachItem.description}
        </Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications

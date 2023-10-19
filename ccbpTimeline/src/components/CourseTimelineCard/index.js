import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  const {title, courseTitle, description, duration, tagsList} = data
  return (
    <div className="chrono-item">
      <div className="project-head">
        <h1 className="timeline-head-title">{courseTitle}</h1>
        <div className="project-duration-container">
          <AiFillClockCircle className="clock-img" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tags-container">
        {tagsList.map(eachItem => (
          <li className="list-item" key={eachItem.id}>
            <p className="list-item-head">{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard

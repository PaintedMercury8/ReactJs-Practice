import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  console.log(data)
  const {projectTitle, projectUrl, imageUrl, description, duration} = data
  return (
    <div className="chrono-item-1">
      <img src={imageUrl} alt="project" className="chrono-title-img" />
      <div className="project-head">
        <h1 className="timeline-head-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="clock-img" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <p>
        <span>
          <a href={projectUrl} className="link">
            Visit
          </a>
        </span>
      </p>
    </div>
  )
}

export default ProjectTimelineCard

// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="main-container">
      <h2 className="timeline-journey">
        MY JOURNEY OF <br /> <span className="timeline-ccbp">CCBP 4.0</span>
      </h2>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return <CourseTimelineCard data={eachItem} key={eachItem.id} />
          }
          return <ProjectTimelineCard data={eachItem} key={eachItem.id} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView

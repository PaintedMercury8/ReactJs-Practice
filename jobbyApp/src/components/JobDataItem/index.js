import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const JobDataItem = props => {
  const {data} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = data
  return (
    <Link to={`/jobs/${id}`} className="link-nav">
      <li className="job-data-items">
        <div className="job-data-company-details-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo-job-item"
          />
          <div className="company-name-container">
            <h2 className="job-item-title">{title}</h2>
            <div className="star-container">
              <AiFillStar className="job-item-star" />
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div className="company-job-type">
          <div className="job-item-type-container">
            <div className="icon-job-item-container">
              <MdLocationOn className="location-job-icon" />
              <p className="skills-item-para">{location}</p>
            </div>
            <div className="icon-job-item-container">
              <BsFillBriefcaseFill className="location-job-icon" />
              <p className="skills-item-para">{employmentType}</p>
            </div>
          </div>
          <h2 className="per-annum">{packagePerAnnum}</h2>
        </div>
        <hr className="job-item-line" />
        <h1 className="job-data-item-desc">Description</h1>
        <p>{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobDataItem

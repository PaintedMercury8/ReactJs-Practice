import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiFillStar} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {FiShare} from 'react-icons/fi'
import Header from '../Header/index'

import './index.css'

const initialView = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  initial: 'INITIAL',
}
const initialData = {
  jobDetails: {
    companyLogoUrl: '',
    companyWebsiteUrl: '',
    employmentType: '',
    jobDescription: '',
    skills: [],
    lifeAtCompany: '',
    location: '',
    packagePerAnnum: '',
    rating: '',
    title: '',
  },
  similarJobs: [],
}

class JobItemDetail extends Component {
  state = {
    view: initialView.initial,
    displayData: initialData,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({view: initialView.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const filteredData = {
        jobDetails: {
          id: data.job_details.id,
          companyLogoUrl: data.job_details.company_logo_url,
          companyWebsiteUrl: data.job_details.company_website_url,
          employmentType: data.job_details.employment_type,
          jobDescription: data.job_details.job_description,
          skills: data.job_details.skills.map(eachItem => ({
            imageUrl: eachItem.image_url,
            name: eachItem.name,
          })),
          lifeAtCompany: {
            description: data.job_details.life_at_company.description,
            imageUrl: data.job_details.life_at_company.image_url,
          },
          location: data.job_details.location,
          packagePerAnnum: data.job_details.package_per_annum,
          rating: data.job_details.rating,
          title: data.job_details.title,
        },
        similarJobs: data.similar_jobs.map(eachItem => ({
          companyLogoUrl: eachItem.company_logo_url,
          employmentType: eachItem.employment_type,
          id: eachItem.id,
          jobDescription: eachItem.job_description,
          location: eachItem.location,
          rating: eachItem.rating,
          title: eachItem.title,
        })),
      }
      this.setState({view: initialView.success, displayData: filteredData})
    } else {
      this.setState({view: initialView.failure})
    }
  }

  getView = () => {
    const {view, displayData} = this.state
    console.log(displayData)
    const {jobDetails, similarJobs} = displayData
    console.log(jobDetails)
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      skills,
      lifeAtCompany,
      location,
      packagePerAnnum,
      rating,
      title,
    } = jobDetails
    console.log(skills)
    switch (view) {
      case initialView.success:
        return (
          <>
            <div className="item-detail-container">
              <div className="job-data-company-details-container">
                <img
                  src={companyLogoUrl}
                  alt="job details company logo"
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
                    <MdLocationOn className="location-job-icon skill-icon-main" />
                    <p className="job-item-sm-para">{location}</p>
                  </div>
                  <div className="icon-job-item-container">
                    <BsFillBriefcaseFill className="location-job-icon skill-icon-main" />
                    <p className="job-item-sm-para">{employmentType}</p>
                  </div>
                </div>
                <p className="per-annum">{packagePerAnnum}</p>
              </div>
              <hr className="job-item-line" />
              <div className="description-link-container">
                <h1 className="visit-description-link-head">Description</h1>
                <a
                  href={companyWebsiteUrl}
                  className="visit-cont"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="visit-description-para">Visit</p>
                  <FiShare className="open-share-icon" color="#6366f1" />
                </a>
              </div>
              <p className="job-detail-description-para">{jobDescription}</p>
              <h3 className="skills-container">Skills</h3>
              <ul className="skills-list">
                {skills.map(eachItem => (
                  <li className="skills-list-item" key={eachItem.name}>
                    <img
                      src={eachItem.imageUrl}
                      className="skills-img"
                      alt={eachItem.name}
                    />
                    <p className="skills-item-para">{eachItem.name}</p>
                  </li>
                ))}
              </ul>
              <h2 className="life-at-company-main-head">Life at Company</h2>
              <div className="life-at-company-container">
                <p className="life-at-company-description">
                  {lifeAtCompany.description}
                </p>
                <img
                  src={lifeAtCompany.imageUrl}
                  className="life-at-company-img"
                  alt="life at company"
                />
              </div>
            </div>
            <div className="similar-jobs-container">
              <h1>Similar Jobs</h1>
              <ul className="similar-jobs-ul">
                {similarJobs.map(eachItem => (
                  <li className="similar-job-item" key={eachItem.id}>
                    <div className="job-data-company-details-container">
                      <img
                        src={eachItem.companyLogoUrl}
                        alt="similar job company logo"
                        className="company-logo-job-item"
                      />
                      <div className="company-name-container">
                        <h2 className="job-item-title">{eachItem.title}</h2>
                        <div className="star-container">
                          <AiFillStar className="job-item-star" />
                          <p>{eachItem.rating}</p>
                        </div>
                      </div>
                    </div>
                    <h2>Description</h2>
                    <p>{eachItem.jobDescription}</p>
                    <div className="company-job-type">
                      <div className="job-item-type-container">
                        <div className="icon-job-item-container">
                          <MdLocationOn className="location-job-icon skill-icon-main " />
                          <p className="skills-item-para">
                            {eachItem.location}
                          </p>
                        </div>
                        <div className="icon-job-item-container">
                          <BsFillBriefcaseFill className="location-job-icon skill-icon-main " />
                          <p className="skills-item-para">
                            {eachItem.employmentType}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )
      case initialView.loading:
        return (
          <div className="item-detail-error-loading">
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
          </div>
        )
      case initialView.failure:
        return (
          <div className="item-detail-error-loading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
              className="job-detail-failure"
              alt="failure view"
            />
            <h1 className="job-detail-failure-head">
              Oops! Something Went Wrong
            </h1>
            <p className="job-detail-failure-para">
              We Cannot seem to find the page you are looking for.
            </p>
            <button type="button" className="retry-btn" onClick={this.getData}>
              Retry
            </button>
          </div>
        )

      default:
        return null
    }
  }

  render() {
    return (
      <div className="item-detail-bg-container">
        <Header />
        {this.getView()}
      </div>
    )
  }
}

export default JobItemDetail

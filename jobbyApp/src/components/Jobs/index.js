import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header/index'
import JobDataItem from '../JobDataItem/index'
import FilterComponent from '../FilterComponent/index'
import Profile from '../Profile/index'
import './index.css'

const initialData = {
  initialSearch: '',
  initialPathParam: [],
  initialRange: '',
  initialArrData: '',
}

const initialView = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  noItem: 'NOITEM',
}

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class Jobs extends Component {
  state = {
    jobData: initialData.initialArrData,
    pathParams: initialData.initialPathParam,
    salaryRange: initialData.initialRange,
    inputSearch: initialData.initialSearch,
    view: initialView.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({view: initialView.loading})
    const {pathParams, salaryRange, inputSearch} = this.state
    const params = pathParams.join(',')
    const url = `https://apis.ccbp.in/jobs?employment_type=${params}&minimum_package=${salaryRange}&search=${inputSearch}`
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
      const {jobs, total} = data
      const convertedData = jobs.map(eachItem => ({
        companyLogoUrl: eachItem.company_logo_url,
        employmentLogo: eachItem.employment_logo,
        id: eachItem.id,
        jobDescription: eachItem.job_description,
        employmentType: eachItem.employment_type,
        location: eachItem.location,
        packagePerAnnum: eachItem.package_per_annum,
        rating: eachItem.rating,
        title: eachItem.title,
      }))
      if (total > 0) {
        this.setState({view: initialView.success, jobData: convertedData})
      } else {
        this.setState({view: initialView.noItem})
      }
    } else {
      this.setState({view: initialView.failure})
    }
  }

  getView = () => {
    const {view, jobData} = this.state
    switch (view) {
      case initialView.success:
        return (
          <ul className="data-list">
            {jobData.map(eachItem => (
              <JobDataItem key={eachItem.id} data={eachItem} />
            ))}
          </ul>
        )
      case initialView.loading:
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        )
      case initialView.noItem:
        return (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
              className="no-jobs"
              alt="no jobs"
            />
            <h1>No Jobs Found</h1>
            <p>We could not find any jobs. Try other filters</p>
          </>
        )
      case initialView.failure:
        return (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
              alt="failure view"
              className="no-jobs"
            />
            <h1 className="jobs-sm-fail-head">Oops! Something Went Wrong</h1>
            <p className="jobs-sm-fail-para">
              We cannot seem to find the page you are looking for.
            </p>
            <button className="retry-btn" type="button" onClick={this.getData}>
              Retry
            </button>
          </>
        )
      default:
        return null
    }
  }

  searchArray = event => {
    this.setState({inputSearch: event.target.value})
  }

  changeParamsState = (data, isTrue) => {
    if (isTrue === true) {
      this.setState(
        prevState => ({
          pathParams: [...prevState.pathParams, data],
        }),
        this.getData,
      )
    } else {
      this.setState(
        prevState => ({
          pathParams: prevState.pathParams.filter(
            eachItem => eachItem !== data,
          ),
        }),
        this.getData,
      )
    }
  }

  changeSalaryRange = salary => {
    this.setState({salaryRange: salary}, this.getData)
  }

  searchJobsIcon = () => {
    this.getData()
  }

  searchEnter = event => {
    if (event.key === 'Enter') {
      this.setState({inputSearch: event.target.value}, this.getData)
    }
  }

  render() {
    const {inputSearch} = this.state
    return (
      <div className="job-bg-container">
        <Header />
        <div className="job-main-container">
          <div className="search-sm-container">
            <input
              type="search"
              className="search-sm"
              placeholder="Search"
              onChange={this.searchArray}
              onKeyDown={this.searchEnter}
              value={inputSearch}
            />
            <div className="search-icon-container">
              <button
                type="button"
                className="search-btn-click"
                onClick={this.searchJobsIcon}
                data-testid="searchButton"
              >
                <AiOutlineSearch className="search-icon" />
              </button>
            </div>
          </div>
          <div className="filter-container">
            <Profile />
            <hr />
            <FilterComponent
              employmentTypesList={employmentTypesList}
              salaryRangesList={salaryRangesList}
              changeParamsState={this.changeParamsState}
              changeSalaryRange={this.changeSalaryRange}
            />
          </div>
          <div className="job-data-container">
            <div className="search-lg-container">
              <input
                type="search"
                className="search-lg"
                placeholder="Search"
                onChange={this.searchArray}
                onKeyDown={this.searchEnter}
                value={inputSearch}
              />
              <div className="search-icon-container">
                <button
                  type="button"
                  className="search-btn-click"
                  onClick={this.searchJobsIcon}
                  data-testid="searchButton"
                >
                  <AiOutlineSearch className="search-icon" />
                </button>
              </div>
            </div>
            <div className="job-data-ul-view-container">{this.getView()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs

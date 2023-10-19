// Write your code here

import Loader from 'react-loader-spinner'
import {Component} from 'react'
import VaccinationByAge from '../VaccinationByAge/index'
import VaccinationByGender from '../VaccinationByGender/index'
import VaccinationCoverage from '../VaccinationCoverage/index'
import './index.css'

const stateView = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

const initialData = {
  initial: {},
}

class CowinDashboard extends Component {
  state = {view: stateView.initial, data: initialData.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({view: stateView.loading})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(eachItem => ({
          vaccineDate: eachItem.vaccine_date,
          dose1: eachItem.dose_1,
          dose2: eachItem.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({view: stateView.success, data: formattedData})
    } else {
      this.setState({view: stateView.failure})
    }
  }

  renderGraphs = () => {
    const {data} = this.state
    const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} = data
    return (
      <>
        <VaccinationCoverage data={last7DaysVaccination} />
        <VaccinationByGender data={vaccinationByGender} />
        <VaccinationByAge data={vaccinationByAge} />
      </>
    )
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailure = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failureView"
      />
      <h1 className="failure-head">Something went wrong</h1>
    </>
  )

  getView = () => {
    const {view} = this.state
    switch (view) {
      case stateView.success:
        return this.renderGraphs()
      case stateView.loading:
        return this.renderLoading()
      case stateView.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="top-logo-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo"
            />
            <p className="logo-head">Co-WIN</p>
          </div>
          <h1 className="main-head">CoWIN Vaccination in India</h1>
        </div>
        <div className="graph-container">{this.getView()}</div>
      </div>
    )
  }
}

export default CowinDashboard

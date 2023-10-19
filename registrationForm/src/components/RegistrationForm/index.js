import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    isSubmitted: false,
    firstNameEmpty: false,
    lastNameEmpty: false,
  }

  submitDetails = event => {
    const {firstNameInput, lastNameInput} = this.state
    event.preventDefault()
    this.checkFirstName()
    this.checkLastName()
    if (firstNameInput === '' || lastNameInput === '') {
      return
    }
    this.setState({
      isSubmitted: true,
      firstNameEmpty: false,
      lastNameEmpty: false,
      firstNameInput: '',
      lastNameInput: '',
    })
  }

  changeFirst = event => {
    this.setState({firstNameInput: event.target.value})
  }

  changeLast = event => {
    this.setState({lastNameInput: event.target.value})
  }

  checkFirstName = () => {
    const {firstNameInput} = this.state
    if (firstNameInput !== '') {
      this.setState({firstNameEmpty: false})
    } else {
      this.setState({firstNameEmpty: true})
    }
  }

  checkLastName = () => {
    const {lastNameInput} = this.state
    if (lastNameInput !== '') {
      this.setState({lastNameEmpty: false})
    } else {
      this.setState({lastNameEmpty: true})
    }
  }

  renderMainDetails = () => {
    const {
      firstNameInput,
      lastNameInput,
      firstNameEmpty,
      lastNameEmpty,
    } = this.state

    const firstClassName = firstNameEmpty ? 'inputRed input' : 'input'
    const lastClassName = lastNameEmpty ? 'inputRed input' : 'input'
    return (
      <>
        <form className="form-container" onSubmit={this.submitDetails}>
          <div className="input-container">
            <label htmlFor="firstname" className="label">
              FIRST NAME
            </label>
            <input
              id="firstname"
              className={firstClassName}
              onChange={this.changeFirst}
              onBlur={this.checkFirstName}
              value={firstNameInput}
              placeholder="First Name"
            />
            {firstNameEmpty && <p className="error">Required</p>}
          </div>
          <div className="input-container">
            <label htmlFor="lastname" className="label">
              LAST NAME
            </label>
            <input
              id="lastname"
              className={lastClassName}
              onChange={this.changeLast}
              onBlur={this.checkLastName}
              value={lastNameInput}
              placeholder="Last Name"
            />
            {lastNameEmpty && <p className="error">Required</p>}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </>
    )
  }

  changeSubmitState = () => {
    this.setState({
      isSubmitted: false,
    })
  }

  renderSubmitted = () => (
    <div className="form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-btn"
        onClick={this.changeSubmitState}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    console.log('rendered')

    return (
      <div className="bg-container">
        <h1 className="main-head">Registration</h1>
        {isSubmitted === false
          ? this.renderMainDetails()
          : this.renderSubmitted()}
      </div>
    )
  }
}

export default RegistrationForm

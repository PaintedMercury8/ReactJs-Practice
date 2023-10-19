// Write your code here
import './index.css'

const registrationDetails = {
  initial: 'INITIAL',
  yet: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveRegistrationDetails = props => {
  const {type} = props

  const yetToRegisterView = () => (
    <div className="details-container-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p className="yet-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="reg-btn">
        Register Here
      </button>
    </div>
  )

  const initialView = () => (
    <p className="initial-view">
      Click on an event, to view its registration details{' '}
    </p>
  )

  const registeredView = () => (
    <div className="details-container-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registered-img"
        alt="registered"
      />
      <h1 className="registered-display-status-head">
        You have already registered for the event
      </h1>
    </div>
  )

  const closedView = () => (
    <div className="details-container-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="closed-img"
        alt="registrations closed"
      />
      <h1 className="registered-display-status-head">
        Registrations Are Closed Now!
      </h1>
      <p>Stay tuned. We Will reopen the registrations soon!</p>
    </div>
  )

  console.log(type)
  switch (type) {
    case registrationDetails.initial:
      return initialView()
    case registrationDetails.yet:
      return yetToRegisterView()
    case registrationDetails.registered:
      return registeredView()
    case registrationDetails.closed:
      return closedView()
    default:
      return null
  }
}

export default ActiveRegistrationDetails

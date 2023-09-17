import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentList: [],
    inputText: '',
    date: '',
    isStarredToggled: false,
  }

  addAppointment = event => {
    event.preventDefault()
    const {inputText, date} = this.state
    if (inputText === '' || date === '') {
      return
    }
    const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
    const appItem = {
      id: uuidv4(),
      title: inputText,
      date: formattedDate,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, appItem],
      inputText: '',
      date: '',
    }))
  }

  toggleStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isStarred: !eachItem.isStarred}
        }
        return eachItem
      }),
    }))
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  changeText = event => {
    this.setState({inputText: event.target.value})
  }

  filterStarred = () => {
    this.setState(prevState => ({
      isStarredToggled: !prevState.isStarredToggled,
    }))
  }

  render() {
    const {appointmentList, inputText, date, isStarredToggled} = this.state
    const filteredList = isStarredToggled
      ? appointmentList.filter(eachItem => eachItem.isStarred === true)
      : appointmentList
    const starredBtnClass = isStarredToggled
      ? 'starred starred-change'
      : 'starred'

    return (
      <div className="bg-container">
        <div className="main-container">
          <form
            className="appointment-container"
            onSubmit={this.addAppointment}
          >
            <div className="inputFields">
              <h1 className="app-head">Add Appointment</h1>
              <label className="title" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                className="textBox"
                value={inputText}
                onChange={this.changeText}
                placeholder="Title"
                id="title"
              />
              <label className="title" htmlFor="date">
                DATE
              </label>
              <input
                type="date"
                className="dateBox"
                value={date}
                onChange={this.changeDate}
                id="date"
              />
              <button type="submit" className="addBtn">
                Add
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="appointment-img"
              alt="appointments"
            />
          </form>
          <hr className="line" />
          <div className="bottom-container">
            <div className="starred-container">
              <h1 className="bottom-head">Appointments</h1>
              <button
                className={starredBtnClass}
                type="button"
                onClick={this.filterStarred}
              >
                Starred
              </button>
            </div>
            <ul className="items-container-list">
              {filteredList.map(eachItem => (
                <AppointmentItem
                  data={eachItem}
                  key={eachItem.id}
                  toggleStar={this.toggleStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments

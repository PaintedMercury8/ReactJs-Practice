import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordsItem from './Components/PasswordsItem/index'

class App extends Component {
  state = {
    passwordsList: [],
    isPasswordChecked: false,
    urlInput: '',
    userInput: '',
    passInput: '',
    searchInput: '',
  }

  changeUrl = event => {
    console.log(event.target.value)
    this.setState({urlInput: event.target.value})
  }

  changeUser = event => {
    console.log(event.target.value)
    this.setState({userInput: event.target.value})
  }

  changePassword = event => {
    console.log(event.target.value)
    this.setState({passInput: event.target.value})
  }

  addUser = event => {
    event.preventDefault()
    const {urlInput, userInput, passInput} = this.state
    const userDetails = {
      id: uuidv4(),
      urlInput,
      userInput,
      passInput,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, userDetails],
      urlInput: '',
      userInput: '',
      passInput: '',
    }))
  }

  changeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  triggerCheck = event => {
    this.setState({
      isPasswordChecked: event.target.checked,
    })
  }

  onDelete = id => {
    console.log(id)
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {
      passwordsList,
      isPasswordChecked,
      urlInput,
      userInput,
      passInput,
      searchInput,
    } = this.state
    const filteredList = passwordsList.filter(eachItem =>
      eachItem.urlInput.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(filteredList)
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="appLogo"
          alt="app logo"
        />
        <div className="top-container">
          <form className="inputs-container" onSubmit={this.addUser}>
            <h1 className="newPassword">Add New Password</h1>
            <div className="input-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-img"
              />
              <div className="vl" />
              <input
                type="text"
                value={urlInput}
                placeholder="Enter Website"
                onChange={this.changeUrl}
                className="input"
              />
            </div>
            <div className="input-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-img"
              />
              <div className="vl" />
              <input
                type="text"
                value={userInput}
                placeholder="Enter Username"
                onChange={this.changeUser}
                className="input"
              />
            </div>
            <div className="input-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-img"
              />
              <div className="vl" />
              <input
                type="password"
                value={passInput}
                placeholder="Enter Password"
                onChange={this.changePassword}
                className="input"
              />
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="md-back-top-img"
            alt="password manager"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="sm-back-top-img"
            alt="password manager"
          />
        </div>
        <div className="bottom-container">
          <div className="search-bar-container">
            <div className="password-flex-display">
              <h1 className="yourPasswords">Your Passwords</h1>
              <div className="listLengthContainer">
                <p className="listLength">{filteredList.length}</p>
              </div>
            </div>
            <div className="search-bottom-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-icon"
                alt="search"
              />
              <div className="vl1" />
              <input
                type="search"
                value={searchInput}
                onChange={this.changeSearch}
                className="search-input"
                placeholder="search"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkInput-container">
            <input
              type="checkbox"
              onChange={this.triggerCheck}
              className="checkBox"
              id="checkbox"
            />
            <label htmlFor="checkbox" className="label">
              Show Passwords
            </label>
          </div>
          {filteredList.length === 0 && (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="noPasswords"
                alt="no passwords"
              />
              <p className="noPass">No Passwords</p>
            </>
          )}
          <ul className="item-container">
            {filteredList.map(eachItem => (
              <PasswordsItem
                data={eachItem}
                onDelete={this.onDelete}
                isPasswordChecked={isPasswordChecked}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App

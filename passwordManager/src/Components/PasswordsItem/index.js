import './index.css'

const PasswordsItem = props => {
  const {data, isPasswordChecked, onDelete} = props
  const {id, urlInput, userInput, passInput} = data
  const initial = urlInput.slice(0, 1).toLocaleUpperCase()

  const deleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="passwordItems">
      <div className="item-logo">
        <h1>{initial}</h1>
      </div>
      <div className="password-display-container">
        <p className="urlName">{urlInput}</p>
        <p className="userName">{userInput}</p>
        {isPasswordChecked && <p className="passName">{passInput}</p>}
        {isPasswordChecked === false && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        )}
      </div>
      <button
        className="delete-btn"
        onClick={deleteItem}
        data-testid="delete"
        type="submit"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordsItem

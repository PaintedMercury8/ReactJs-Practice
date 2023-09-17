import './index.css'

const HistoryItems = props => {
  const {eachItem, func} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const deletefunc = () => {
    func(id)
  }
  return (
    <li className="listHistoryItem">
      <div className="date">
        <p className="itemTime">{timeAccessed}</p>
        <div className="itemLogoAndDomain">
          <div className="test">
            <img src={logoUrl} className="listLogo" alt="domain logo" />
            <p className="itemTitle">{title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
          <button
            className="btn"
            data-testid="delete"
            type="button"
            onClick={deletefunc}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="deleteImg"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItems

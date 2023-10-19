import './index.css'

const Tabs = props => {
  const {data, isActive, changeCategory} = props
  const {tabId, displayText} = data
  const onChange = () => {
    changeCategory(tabId)
  }
  return (
    <li className="tab-item">
      <button
        type="button"
        className={isActive ? 'btn active' : 'btn'}
        onClick={onChange}
      >
        <h1 className="tab-head">{displayText}</h1>
      </button>
    </li>
  )
}

export default Tabs

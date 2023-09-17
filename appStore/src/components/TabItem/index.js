// Write your code here
import './index.css'

const TabItem = props => {
  const {data, changeTab, isTrue} = props
  const {tabId, displayText} = data

  const changeStateTab = () => {
    changeTab(tabId)
  }
  const classValue = isTrue ? 'btn activate' : 'btn'

  return (
    <li className="tab-item-category">
      <button className={classValue} type="button" onClick={changeStateTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

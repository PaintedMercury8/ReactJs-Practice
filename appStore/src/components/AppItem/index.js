// Write your code here
import './index.css'

const AppItem = props => {
  const {data} = props
  const {appName, imageUrl} = data
  return (
    <li className="store-items">
      <img src={imageUrl} className="app-img" alt={appName} />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem

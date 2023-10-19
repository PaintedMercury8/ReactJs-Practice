// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="header">
          <ul className="header-list">
            <li>
              <h1>Layout</h1>
            </li>
            <li>
              {' '}
              <input
                type="checkbox"
                checked={showContent}
                className="checkbox"
                id="content"
                onChange={onToggleShowContent}
              />{' '}
              <label htmlFor="content">Content</label>
            </li>
            <li>
              {' '}
              <input
                type="checkbox"
                checked={showLeftNavbar}
                className="checkbox"
                id="leftBar"
                onChange={onToggleShowLeftNavbar}
              />{' '}
              <label htmlFor="leftBar">Left Navbar</label>
            </li>
            <li>
              {' '}
              <input
                type="checkbox"
                checked={showRightNavbar}
                className="checkbox"
                id="rightBar"
                onChange={onToggleShowRightNavbar}
              />{' '}
              <label htmlFor="rightBar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

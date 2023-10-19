// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-underscore-dangle
    const {showContent} = ConfigurationContext._currentValue
    console.log(`abcd ${showContent}`)
  }

  renderContent = () => (
    <div className="content">
      <h2>Content</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ex
        ac ante dignissim dictum. Morbi sodales, est et malesuada pharetra,
        felis erat luctus augue, us dui imperdiet facilisis consectetur
      </p>
    </div>
  )

  renderLeftNav = () => (
    <div className="leftNav">
      <h1 className="head">Left Navbar Menu</h1>
      <ul className="left-nav-list">
        <li className="item">Item 1</li>
        <li className="item">Item 2</li>
        <li className="item">Item 3</li>
        <li className="item">Item 4</li>
      </ul>
    </div>
  )

  renderRightNav = () => (
    <div className="rightNav">
      <h4>Right Navbar Menu</h4>
      <div className="bar right-nav-list">
        <p className="box">Ad 1</p>
        <p className="box">Ad 2</p>
      </div>
    </div>
  )

  render() {
    this.componentDidMount()
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          console.log(showContent)
          return (
            <div className="body">
              {showLeftNavbar && this.renderLeftNav()}
              {showContent && this.renderContent()}
              {showRightNavbar && this.renderRightNav()}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body

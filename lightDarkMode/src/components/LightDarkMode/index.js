// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  changeState = () => {
    const {isDark} = this.state
    if (isDark === false) {
      this.setState(prevState => ({isDark: true}))
    } else {
      this.setState(prevState => ({isDark: false}))
    }
  }

  render() {
    const {isDark} = this.state
    let btnEl
    let style
    if (isDark === false) {
      btnEl = <button onClick={this.changeState}>Dark Mode</button>
      style = 'light'
    } else {
      btnEl = <button onClick={this.changeState}>Light Mode</button>
      style = 'dark'
    }
    const contClass = `container ${style}`
    const headClass = `main-head ${style}`
    return (
      <div className={contClass}>
        <h1 className={headClass}>Click To Change Mode</h1>
        {btnEl}
      </div>
    )
  }
}

export default LightDarkMode

import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
    test: 0,
  }

  toggleContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent,
      test: prevState.test + 1,
    }))
  }

  toggleLeftNavbar = () => {
    this.setState(prevState => ({
      showLeftNavbar: !prevState.showLeftNavbar,
      test: prevState.test + 1,
    }))
  }

  toggleRightNavbar = () => {
    this.setState(prevState => ({
      showRightNavbar: !prevState.showRightNavbar,
      test: prevState.test + 1,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar, test} = this.state
    console.log(test)
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          test,
          onToggleShowContent: this.toggleContent,
          onToggleShowLeftNavbar: this.toggleLeftNavbar,
          onToggleShowRightNavbar: this.toggleRightNavbar,
        }}
      >
        <div className="bg-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App

import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home/index'
import Login from './components/Login/index'
import ProtectedRoute from './components/ProtectedRoute/index'
import AppContext from './context/AppContext'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails/index'
import NotFound from './components/NotFound/index'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedVideos: [],
    isDark: false,
  }

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  addOrRemoveVideo = (id, saveData) => {
    const {savedVideos} = this.state
    const isPresent = savedVideos.findIndex(eachItem => eachItem.id === id)
    if (isPresent !== -1) {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos.filter(
          eachItem => eachItem.id !== id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, saveData],
      }))
    }
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <AppContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          savedVideos,
          addOrRemoveVideo: this.addOrRemoveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App

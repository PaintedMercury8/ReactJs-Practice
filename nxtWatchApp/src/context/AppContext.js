import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideos: [],
  addOrRemoveVideo: () => {},
})

export default AppContext

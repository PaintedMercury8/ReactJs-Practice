import React from 'react'

const ConfigurationContext = React.createContext({
  showContent: true,
  showLeftNavbar: true,
  showRightNavbar: true,
  test: 0,
  onToggleShowContent: () => {},
  onToggleShowLeftNavbar: () => {},
  onToggleShowRightNavbar: () => {},
})

export default ConfigurationContext

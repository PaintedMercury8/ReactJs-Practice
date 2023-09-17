import './index.css'

const Logout = props => {
  const {logout} = props
  return <button onClick={logout}>Logout</button>
}

export default Logout

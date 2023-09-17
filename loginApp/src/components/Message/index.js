import './index.css'

const Message = props => {
  const {state} = props
  if (state === false) {
    return <h1 className="main-head">Please Login</h1>
  }
  return <h1 className="main-head">Welcome User</h1>
}

export default Message

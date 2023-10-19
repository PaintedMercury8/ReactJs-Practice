// Write your JS code here
import Header from '../Header/index'
import LogoutButton from '../LogoutButton/index'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="center">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home

import {Link} from 'react-router-dom'
import Header from '../Header/index'
import './index.css'

const Home = () => (
  <div className="home-flex">
    <Header />
    <div className="home-container">
      <div className="home-description-container">
        <h1 className="home-main-head">Find The Job That Fits Your Life</h1>
        <p className="home-main-para">
          Millions of people are searching for jobs,salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs" className="link-nav">
          <button className="find-jobs" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default Home

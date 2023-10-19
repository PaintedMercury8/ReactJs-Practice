// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-btn"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-btn" />
            </button>
            <ul className="modal-home">
              <Link to="/" className="link-home-about" onClick={() => close()}>
                <li className="link-home-about">
                  <AiFillHome className="modal-icon" />
                  <h1 className="modal-home-css">Home</h1>
                </li>
              </Link>
              <Link
                to="/about"
                className="link-home-about"
                onClick={() => close()}
              >
                {' '}
                <li className="link-home-about">
                  <BsInfoCircleFill className="modal-icon" />
                  <h1 className="modal-home-css">About</h1>
                </li>
              </Link>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header

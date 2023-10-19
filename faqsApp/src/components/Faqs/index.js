// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  state = {arrIncludes: []}

  addOrRemoveList = id => {
    const {arrIncludes} = this.state
    if (arrIncludes.includes(id) === false) {
      this.setState(prevState => ({
        arrIncludes: [...prevState.arrIncludes, id],
      }))
    } else {
      const index = arrIncludes.findIndex(eachItem => eachItem === id)
      const filterArray = [...arrIncludes]
      filterArray.splice(index, 1)
      this.setState({arrIncludes: filterArray})
    }
  }

  render() {
    const {faqsList} = this.props
    const {arrIncludes} = this.state
    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="faq">FAQs</h1>
          <ul className="ul-container">
            {faqsList.map(eachItem => (
              <FaqItem
                data={eachItem}
                key={eachItem.id}
                isTrue={arrIncludes.includes(eachItem.id)}
                addOrRemoveList={this.addOrRemoveList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

// Write your code here.
import './index.css'

const FaqItem = props => {
  const {data, isTrue, addOrRemoveList} = props
  const {id, questionText, answerText} = data

  const ButtonUrl = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const addOrRemove = () => {
    addOrRemoveList(id)
  }

  return (
    <li className="faq-item">
      <div className="btn-head">
        <h1 className="faq-item-head">{questionText}</h1>
        <button type="button" onClick={addOrRemove} className="plusOrMinus">
          <img src={ButtonUrl} alt={isTrue ? 'minus' : 'plus'} />
        </button>
      </div>
      {isTrue && (
        <>
          <hr className="line" /> <p className="answer">{answerText}</p>{' '}
        </>
      )}
    </li>
  )
}

export default FaqItem

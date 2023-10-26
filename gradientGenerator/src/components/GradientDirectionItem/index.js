// Write your code here
import {ListItem, DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {data, isTrue, onChangeDirection} = props
  const {value, displayText} = data

  const changeDirection = () => {
    onChangeDirection(value)
  }

  return (
    <ListItem>
      <DirectionBtn type="button" isTrue={isTrue} onClick={changeDirection}>
        {displayText}
      </DirectionBtn>
    </ListItem>
  )
}

export default GradientDirectionItem

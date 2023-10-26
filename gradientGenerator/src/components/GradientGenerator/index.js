import {Component} from 'react'
import {
  MainContainer,
  MainHead,
  ChooseHead,
  GradientList,
  GenerateBtn,
  ColourContainer,
  ColourItem,
  InputColor,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

const defaultValues = {
  direction: 'top',
  gradient1: '#8ae323',
  gradient2: '#014f7b',
}

class GradientGenerator extends Component {
  state = {
    direction: defaultValues.direction,
    gradient1: defaultValues.gradient1,
    gradient2: defaultValues.gradient2,
    onSubmitDirection: defaultValues.direction,
    onSubmitGradient1: defaultValues.gradient1,
    onSubmitGradient2: defaultValues.gradient2,
  }

  onChangeDirection = value => {
    this.setState({direction: value})
  }

  changeGradientOnSubmit = event => {
    event.preventDefault()
    const {direction, gradient1, gradient2} = this.state
    this.setState({
      onSubmitDirection: direction,
      onSubmitGradient1: gradient1,
      onSubmitGradient2: gradient2,
    })
  }

  changeGradient1 = event => {
    this.setState({gradient1: event.target.value})
  }

  changeGradient2 = event => {
    this.setState({gradient2: event.target.value})
  }

  render() {
    const {
      direction,
      gradient1,
      gradient2,
      onSubmitDirection,
      onSubmitGradient1,
      onSubmitGradient2,
    } = this.state

    return (
      <MainContainer
        direction={onSubmitDirection}
        gradient1={onSubmitGradient1}
        gradient2={onSubmitGradient2}
        onSubmit={this.changeGradientOnSubmit}
        data-testid="gradientGenerator"
      >
        <MainHead>Generate a CSS Color Gradient</MainHead>
        <ChooseHead>Choose Direction</ChooseHead>
        <GradientList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              data={eachItem}
              key={eachItem.directionId}
              isTrue={eachItem.value === direction}
              onChangeDirection={this.onChangeDirection}
            />
          ))}
        </GradientList>
        <ChooseHead>Pick the Colors</ChooseHead>
        <ColourContainer>
          <ColourItem>
            <p>{gradient1}</p>
            <InputColor
              type="color"
              value={gradient1}
              onChange={this.changeGradient1}
            />
          </ColourItem>
          <ColourItem>
            {' '}
            <p>{gradient2}</p>
            <InputColor
              type="color"
              value={gradient2}
              onChange={this.changeGradient2}
            />
          </ColourItem>
        </ColourContainer>
        <GenerateBtn type="submit">Generate</GenerateBtn>
      </MainContainer>
    )
  }
}

export default GradientGenerator

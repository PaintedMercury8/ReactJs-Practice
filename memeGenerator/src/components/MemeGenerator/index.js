import {Component} from 'react'
import {
  MainContainer,
  MemeContainer,
  LoginContainer,
  MemeContent,
  InputLabel,
  GenerateButton,
  TextInput,
  SelectInput,
  MainHead,
  MemeText,
  HeadContainer,
  Content,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
const initialValue = ''

class MemeGenerator extends Component {
  state = {
    inputUrl: initialValue,
    inputTopText: initialValue,
    inputBottomText: initialValue,
    inputFontSize: 8,
    onSubmitImg: initialValue,
    onSubmitTopText: initialValue,
    onSubmitBottomText: initialValue,
    onSubmitFontSize: 8,
  }

  generateMeme = event => {
    event.preventDefault()
    const {inputTopText, inputBottomText, inputUrl, inputFontSize} = this.state

    this.setState({
      onSubmitImg: inputUrl,
      onSubmitTopText: inputTopText,
      onSubmitBottomText: inputBottomText,
      onSubmitFontSize: inputFontSize,
    })
  }

  changeImgUrl = event => {
    this.setState({inputUrl: event.target.value})
  }

  changeTopText = event => {
    this.setState({inputTopText: event.target.value})
  }

  changeBottomText = event => {
    this.setState({inputBottomText: event.target.value})
  }

  changeFontSize = event => {
    this.setState({inputFontSize: event.target.value})
  }

  render() {
    const {
      inputUrl,
      inputTopText,
      inputBottomText,
      inputFontSize,
      onSubmitImg,
      onSubmitTopText,
      onSubmitBottomText,
      onSubmitFontSize,
    } = this.state
    return (
      <MainContainer>
        <HeadContainer>
          <MainHead>Meme Generator</MainHead>
        </HeadContainer>
        <Content>
          <LoginContainer onSubmit={this.generateMeme}>
            <InputLabel htmlFor="imageUrl">Image URL</InputLabel>
            <TextInput
              type="text"
              placeholder="Enter the image URL"
              id="imageUrl"
              value={inputUrl}
              onChange={this.changeImgUrl}
            />
            <InputLabel htmlFor="topText">Top Text</InputLabel>
            <TextInput
              type="text"
              placeholder="Enter the Top Text"
              id="topText"
              value={inputTopText}
              onChange={this.changeTopText}
            />
            <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
            <TextInput
              type="text"
              placeholder="Enter the Bottom Text"
              id="bottomText"
              value={inputBottomText}
              onChange={this.changeBottomText}
            />
            <InputLabel htmlFor="select">Font Size</InputLabel>
            <SelectInput
              name="fontSize"
              id="select"
              value={inputFontSize}
              onChange={this.changeFontSize}
              as="select"
            >
              {fontSizesOptionsList.map(eachItem => (
                <option value={eachItem.optionId} key={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </SelectInput>
            <GenerateButton type="submit">Generate</GenerateButton>
          </LoginContainer>
          <MemeContainer>
            <MemeContent backImg={onSubmitImg} data-testid="meme">
              <MemeText fontSize={onSubmitFontSize}>{onSubmitTopText}</MemeText>
              <MemeText fontSize={onSubmitFontSize}>
                {onSubmitBottomText}
              </MemeText>
            </MemeContent>
          </MemeContainer>
        </Content>
      </MainContainer>
    )
  }
}

export default MemeGenerator

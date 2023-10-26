// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }
`

export const MemeContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 300px;
  }
`

export const LoginContainer = styled.form`
  align-items: stretch;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4%;
  @media screen and (max-width: 767px) {
    width: 100%;
    order: 1;
    height: 400px;
  }
`

export const MemeContent = styled.div`
  width: 80%;
  height: 80%;
  background-image: url(${props => props.backImg});
  background-size: cover;
  background-position: center;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  text-align: center;
  overflow-wrap: break-word;
  @media screen and (max-width: 767px) {
    width: 95%;
    order: 0;
  }
`

export const InputLabel = styled.label`
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 5px;
`

export const GenerateButton = styled.button`
  width: 230px;
  height: 40px;
  border: none;
  border-radius: 2px;
  margin-top: 20px;
  background-color: #0b69ff;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`

export const MainHead = styled.h1`
  font-size: 40px;
  color: #35469c;
  @media screen and (max-width: 767px) {
    font-size: 30px;
    text-align: center;
  }
`

export const MemeHead = styled(MainHead)`
  display: block;
  text-align: center;
  font-size: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TextInput = styled.input`
  height: 40px;
  font-size: 15px;
  color: #5a7184;
  border-radius: 5px;
  border: 2px solid #d7dfe9;
  padding-left: 10px;
  outline: none;
`

export const SelectInput = styled(TextInput)`
  color: #000000;
`

export const MemeText = styled.p`
  font-size: ${props => props.fontSize}px;
  margin: 0px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'Open Sans';
`

export const MemeContentSm = styled(MemeContent)`
  display: block;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeadContainer = styled.div`
  width: 100%;
  padding-left: 4%;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

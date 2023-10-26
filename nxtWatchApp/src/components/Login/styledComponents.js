import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#1f201c' : '#ffffff')};
`

export const LoginContainer = styled.form`
  width: 30%;
  height: 500px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const LoginLogo = styled.img`
  width: 150px;
  margin-bottom: 30px;
`
export const InputLabel = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#010101')};
  font-size: 15px;
  align-self: flex-start;
  margin-bottom: 10px;
`

export const InputElement = styled.input`
  height: 40px;
  border: 2px solid ${props => (props.isDark ? '#ffffff' : '#010101')};
  border-radius: 5px;
  width: 100%;
  margin-bottom: 30px;
  background-color: transparent;
  padding-left: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#010101')};
`

export const CheckBoxElement = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`

export const CheckBoxLabel = styled(InputLabel)`
  margin: 0px;
  margin-top: 3px;
`

export const LoginButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: bold;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`

export const ErrorMessage = styled.p`
  margin: 0px;
  color: red;
  align-self: flex-start;
  margin-top: 5px;
  font-size: 15px;
`

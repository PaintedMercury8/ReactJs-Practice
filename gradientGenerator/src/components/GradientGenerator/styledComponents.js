// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.form`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    ${props => `to ${props.direction}`},
    ${props => props.gradient1},
    ${props => props.gradient2}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'ROBOTO';
`

export const MainHead = styled.h1`
  font-size: 40px;
  color: #ffffff;
  @media screen and (max-width: 767px) {
    font-size: 30px;
    text-align: center;
  }
`

export const ChooseHead = styled.p`
  font-size: 25px;
  color: #ffffff;
  font-weight: 400;
  @media screen and (max-width: 767px) {
    font-size: 20px;
    text-align: center;
  }
`

export const GradientList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
  @media screen and (max-width: 767px) {
    width: 90%;
    flex-wrap: wrap;
  }
`

export const GenerateBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: #00c9b7;
  color: #1e293b;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  font-family: 'ROBOTO';
`
export const ColourContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 65%;
  }
`

export const ColourItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin-bottom: 30px;
`

export const InputColor = styled.input`
  width: 120px;
  height: 40px;
  @media screen and (max-width: 767px) {
    width: 80px;
  }
`

import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #223a5f;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RockPaperScissorsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 80%;
  flex-grow: 0.5;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10%;
`

export const RetryViewPlayerAndEnemy = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
`
export const WinOrLoseHead = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
`

export const WinOrLoseContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const PlayAgain = styled.button`
  width: 150px;
  height: 50px;
  font-size: 15px;
  color: #223a5f;
  font-family: 'Bree Serif';
  border-radius: 10px;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ModalButton = styled(PlayAgain)`
  width: 80px;
  align-self: flex-end;
  margin-right: 20px;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const RulesImg = styled.img`
  width: 80%;
  margin: 5px;
  margin-bottom: 10px;
`

export const CloseBtn = styled.button`
  align-self: flex-end;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
`

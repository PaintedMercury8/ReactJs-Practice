import styled from 'styled-components'

export const GameListItem = styled.li`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
export const GameImg = styled.img`
  width: 300px;
  @media screen and (max-width: 767px) {
    width: 120px;
  }
`

export const GameButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
export const GameButtonDisabled = styled(GameButton)`
  cursor: default;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`

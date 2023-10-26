// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 7px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: calc(50% - 7px);
    margin-bottom: 10px;
  }
`

export const DirectionBtn = styled.button`
  width: 120px;
  height: 40px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #334155;
  font-weight: bold;
  font-size: 15px;
  opacity: ${props => (props.isTrue ? 1 : 0.5)};
  font-family: 'ROBOTO';
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

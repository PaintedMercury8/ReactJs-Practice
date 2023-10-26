import styled from 'styled-components'

export const Header = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  margin-top: 5%;
  padding-left: 2%;
  padding-right: 2%;
`

export const HeaderRockPaperContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  color: #ffffff;
`

export const ScoreContainer = styled.div`
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  @media screen and (max-width: 767px) {
    width: 80px;
  }
`

export const ScoreHead = styled.p`
  margin-bottom: 5px;
`

export const ScoreDisplay = styled.p`
  margin-top: 0px;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
`

export const HeaderListNames = styled.h1`
  font-size: 20px;
  font-family: 'Bree Serif';
  color: #ffffff;
`

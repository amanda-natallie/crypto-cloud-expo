import { Flexbox } from 'components'
import styled from 'styled-components'
import bg from '../../assets/shapes/shape-bg-register.svg'

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`
export const Input = styled.input`
  background-color: white;
  border: 1px solid #c3e0ff;
  color: #737879;
  border-radius: 100px;
  width: calc(50% - 10px);
  height: 64px;
  padding: 0 32px;
  font-weight: 400;
  font-size: 14px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`
export const Button = styled.button`
  background: linear-gradient(90deg, #3c9afe 0.24%, #b8d7f9 100.24%);
  border: none;
  color: white;
  border-radius: 32px;
  width: 250px;
  height: 58px;
  padding: 0 32px;
  font-weight: 700;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    transition: all 0.5s;
    transform: scale(1.1);
    background: linear-gradient(90deg, #1a46b5 0%, #3c9afe 100%);
  }
`
export const StyledRegisterSectionWrapper = styled(Flexbox)`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: left bottom 5vh;
  background-size: 70vh;
  background-attachment: fixed;
  padding-bottom: 84px;
`

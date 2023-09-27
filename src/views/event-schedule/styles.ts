import { Flexbox } from 'components'
import styled from 'styled-components'

export const StyledEventScheduleWrapper = styled(Flexbox)`
  padding-block: 100px;
`

export const StyledTopicsWrapper = styled(Flexbox)`
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
  width: 100%;
  gap: 30px;

  & > div {
    width: calc(50% - 15px);

    @media (max-width: 1033px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      height: 135px;
    }
  }
`

export const StyledEventBlock = styled(Flexbox)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  height: 115px;

  @media (max-width: 1033px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    height: 135px;
  }
`
export const StyledEventBlockImage = styled(Flexbox)`
  width: 35%;
  height: 115px;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  opacity: 0.8;
  @media (max-width: 600px) {
    height: 135px;
  }
`
export const StyledEventBlockContent = styled(Flexbox)`
  width: 65%;
  padding: 20px;
  text-align: left;

  & span {
    font-size: 13px;
    font-weight: 600;
  }
  & h5 {
    font-size: 16px;
    font-weight: 700;
    margin-block: 4px;
    word-wrap: break-word;

    @media (max-width: 1365px) {
      word-break: break-all;
      font-size: 14px;
    }
  }
`

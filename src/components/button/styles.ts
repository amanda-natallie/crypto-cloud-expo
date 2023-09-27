import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${({ theme }) => css`
    position: relative;
    outline: none;
    border: 0;
    padding: 18px 48px;
    border-radius: 32px;
    gap: 10px;
    display: inline-flex;
    color: ${theme.colors.white};
    background: ${theme.gradients[100]};
    font-size: 16px;
    font-weight: 700;
    word-wrap: normal;
    cursor: pointer;
    width: auto;

    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background: ${theme.gradients[200]};
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover::before {
      opacity: 1;
    }
  `}
`

import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${({ theme }) => {
    return css`
      outline: none;
      border: 0;
      display: inline-block;
      padding: 18px 48px;
      background: ${theme.gradients[100]};
      border-radius: 32px;
      gap: 10px;
      display: inline-flex;
      color: ${theme.colors.white};
      font-size: 16px;
      font-weight: 700;
      word-wrap: normal
      cursor: pointer;
      transition: 0.3s;
      width: auto;
      &:hover {
        background: ${theme.gradients[200]};
      }

    `
  }}
`

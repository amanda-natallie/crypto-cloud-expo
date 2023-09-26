export const flexPosition = (
  align?: string | false,
  justify?: string | false,
  flexDirection?: string,
  alignSelf?: string | false,
  justifySelf?: string | false,
): string => `
  display: flex;
  ${align ? `align-items: ${align};` : ''}
  ${justify ? `justify-content: ${justify};` : ''};
  ${flexDirection ? `flex-direction: ${flexDirection};` : ''};
  ${alignSelf ? `align-self: ${alignSelf};` : ''};
  ${justifySelf ? `justify-self: ${justifySelf};` : ''};
`
export const getFocusStyles = (background: string) => `
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 6px;
    background-color: ${background};
    width: calc(100% - 11px);
    height: 2px;
  }
`

export const pxToRem = (px: number): string => `${px / 16}rem`

export const spacing = (spacing: number): string => pxToRem(spacing * 8)

type GetWidthProps = {
  width?: string | number
  fullWidth?: boolean
  fullScreen?: boolean
}

export const getWidth = (props: GetWidthProps): string => {
  const { width, fullWidth, fullScreen } = props
  if (fullScreen) return '100vw'
  if (fullWidth) return '100%'
  if (width) return typeof width === 'number' ? pxToRem(width) : width
  return 'auto'
}

type GetHeightProps = {
  height?: string | number
  fullHeight?: boolean
  fullScreen?: boolean
}

export const getHeight = (props: GetHeightProps): string => {
  const { height, fullHeight, fullScreen } = props
  if (fullScreen) return '100vh'
  if (fullHeight) return '100%'
  if (height) return typeof height === 'number' ? pxToRem(height) : height
  return 'auto'
}

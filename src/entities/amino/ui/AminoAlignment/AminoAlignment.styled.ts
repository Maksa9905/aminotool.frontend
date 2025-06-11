import { css, Grid, Paper, styled, Typography } from '@mui/material'
import { getAminoColor } from '../../utils/getAminoColor'

interface StyledSymbolProps {
  isMatch?: boolean
}

export const StyledSymbol = styled('span')<StyledSymbolProps>`
  background-color: ${({ children, theme, isMatch }) =>
    isMatch ? getAminoColor(String(children), theme) : 'transparent'};
  display: inline-block;
  min-width: 1ch;
  text-align: center;
  font-family: monospace;
  line-height: 1rem;
`

export const StyledContainer = styled(Grid)`
  position: relative;
`

export const StyledRow = styled(Typography)<{ $shifted?: boolean }>`
  font-family: monospace;
  line-height: 4rem;
  ${({ $shifted }) =>
    $shifted &&
    css`
      position: absolute;
      top: 2rem;
      width: 100%;
    `}
`

export const StyledErrorTextContainer = styled(Paper)`
  color: ${({ theme }) => theme.palette.error.main};
  padding: 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.error.light};
`

export const StyledDefaultTextContainer = styled(Paper)`
  padding: 16px;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
`

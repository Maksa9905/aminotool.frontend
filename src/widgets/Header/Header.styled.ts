import { AppBar, styled } from '@mui/material'

export const StyledAppBar = styled(AppBar<'header'>)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.palette.background.default};
  height: ${({ theme }) => theme.variables.headerHeight};
`

import { styled } from '@mui/material'

export const StyledPageContainer = styled('main')`
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: ${({ theme }) => theme.variables.headerHeight};
`

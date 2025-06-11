import { Logotype } from '#/shared/ui'
import { StyledAppBar } from './Header.styled'

const Header = () => {
  return (
    <StyledAppBar component="header">
      <Logotype />
    </StyledAppBar>
  )
}

export default Header

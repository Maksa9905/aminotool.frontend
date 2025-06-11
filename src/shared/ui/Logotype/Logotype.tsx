import { AminoIcon } from '#/shared/icons'
import { Icon, Stack, Typography } from '@mui/material'

const Logotype = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
    >
      <Typography variant="h1">Amino Tool</Typography>
      <Icon color="primary">
        <AminoIcon />
      </Icon>
    </Stack>
  )
}

export default Logotype

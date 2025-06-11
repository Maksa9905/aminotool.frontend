import { SnackbarProps, Snackbar } from '@mui/material'

export type AlertContainerProps = Pick<
  SnackbarProps,
  'message' | 'autoHideDuration' | 'open' | 'onClose' | 'anchorOrigin'
>

export const AlertContainer = (props: AlertContainerProps) => {
  return (
    <Snackbar
      sx={{
        '& .MuiSnackbarContent-root': {
          backgroundColor: 'transparent',
          border: 'transparent',
          boxShadow: 'none',
        },
      }}
      {...props}
    />
  )
}

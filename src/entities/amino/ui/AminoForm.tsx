import { FormTextField } from '#/shared/ui'
import { Button, Stack } from '@mui/material'
import { AminoFormValues } from '../model/types'
import { Control } from 'react-hook-form'

type AminoFormProps = {
  onSubmit: () => void
  control: Control<AminoFormValues>
}

const AminoForm = ({ onSubmit, control }: AminoFormProps) => {
  return (
    <Stack spacing={2}>
      <FormTextField
        label="First Amino"
        name="first_amino"
        control={control}
      />
      <FormTextField
        label="Second Amino"
        name="second_amino"
        control={control}
      />
      <Button
        variant="contained"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Stack>
  )
}

export default AminoForm

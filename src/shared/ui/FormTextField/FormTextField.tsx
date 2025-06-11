import { TextField, TextFieldProps } from '@mui/material'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

type FormTextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>
  name: TFieldName
} & TextFieldProps

const FormTextField = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  ...props
}: FormTextFieldProps<TFieldValues, TFieldName>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...props}
          {...field}
          size="small"
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  )
}

export default FormTextField

import { AminoFormValues } from './types'

const useDefaultValues = (): AminoFormValues => {
  return {
    first_amino: '',
    second_amino: '',
    custom_errors: null,
  }
}

export default useDefaultValues

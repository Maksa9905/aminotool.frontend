import { z } from 'zod'
import { AMINO_ACIDS } from './constants'

const useValidationSchema = () => {
  return z
    .object({
      first_amino: z.string(),
      second_amino: z.string(),
      custom_errors: z.null(),
    })
    .superRefine(({ first_amino, second_amino }, ctx) => {
      if (!first_amino || !second_amino) {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Aminos are required',
          path: ['custom_errors'],
        })
      }
    })
    .superRefine(({ first_amino, second_amino }, ctx) => {
      if (first_amino.length !== second_amino.length) {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Aminos must be the same length',
          path: ['custom_errors'],
        })
      }
    })
    .superRefine(({ first_amino, second_amino }, ctx) => {
      if (
        [...first_amino].some((symbol) => !AMINO_ACIDS.includes(symbol)) ||
        [...second_amino].some((symbol) => !AMINO_ACIDS.includes(symbol))
      ) {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Aminos must contains valid symbols',
          path: ['custom_errors'],
        })
      }
    })
}

export default useValidationSchema

import { Theme } from '@mui/material'
import {
  CYSTEINES,
  HYDROPHOBICS,
  GLYCINES,
  NEGATIVELY_CHARGED,
  POLAR_UNCHARGED,
  POSITIVELY_CHARGED,
} from '../model/constants'

export const getAminoColor = (symbol: string, theme: Theme) => {
  if (CYSTEINES.includes(symbol)) {
    return theme.palette.amino.cysteine
  }
  if (HYDROPHOBICS.includes(symbol)) {
    return theme.palette.amino.hydrophobic
  }
  if (GLYCINES.includes(symbol)) {
    return theme.palette.amino.glycine
  }
  if (NEGATIVELY_CHARGED.includes(symbol)) {
    return theme.palette.amino.negativelyCharged
  }
  if (POSITIVELY_CHARGED.includes(symbol)) {
    return theme.palette.amino.positivelyCharged
  }
  if (POLAR_UNCHARGED.includes(symbol)) {
    return theme.palette.amino.polarUncharged
  }

  return theme.palette.background.paper
}

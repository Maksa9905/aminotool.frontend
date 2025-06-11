import { Control, useFormState } from 'react-hook-form'
import { useEffect, useRef } from 'react'
import { AminoFormValues, AminoState } from '../../model/types'
import {
  StyledContainer,
  StyledDefaultTextContainer,
  StyledErrorTextContainer,
  StyledRow,
  StyledSymbol,
} from './AminoAlignment.styled'
import { Typography } from '@mui/material'

type AminoAlignmentProps = {
  state: AminoState
  control: Control<AminoFormValues>
  onCopy: (value: string) => void
}

const AminoAlignment = ({ state, control, onCopy }: AminoAlignmentProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const errors = useFormState({ control }).errors.custom_errors

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection()
      if (selection && selection.toString().trim() && containerRef.current) {
        if (containerRef.current.contains(selection.anchorNode)) {
          onCopy(selection.toString())
        }
      }
    }

    const currentRef = containerRef.current
    if (currentRef) {
      currentRef.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [onCopy])

  if (errors) {
    return (
      <StyledErrorTextContainer>
        <Typography>{errors.message}</Typography>
      </StyledErrorTextContainer>
    )
  }

  if (!state)
    return (
      <StyledDefaultTextContainer>
        <Typography>Enter amino acids and click "submit"</Typography>
      </StyledDefaultTextContainer>
    )

  return (
    <StyledContainer ref={containerRef}>
      <StyledRow $shifted>
        {[...state.second_amino.toUpperCase()].map((symbol, index) => (
          <StyledSymbol
            isMatch={symbol === state.first_amino.toUpperCase()[index]}
            key={index}
          >
            {symbol}
          </StyledSymbol>
        ))}
      </StyledRow>
      <StyledRow>
        {[...state.first_amino.toUpperCase()].map((symbol, index) => (
          <StyledSymbol
            isMatch
            key={index}
          >
            {symbol}
          </StyledSymbol>
        ))}
      </StyledRow>
    </StyledContainer>
  )
}

export default AminoAlignment

import { AminoAlignment, AminoForm } from '#/entities/amino'
import {
  AminoFormValues,
  useValidationSchema,
  useDefaultValues,
} from '#/entities/amino'
import { AlertContainer, PageContainer } from '#/shared/ui'
import Header from '#/widgets/Header'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert } from '@mui/material'

const AminoToolPage = () => {
  const [copiedTextValue, setCopiedTextValue] = useState(false)
  const [submittedData, setSubmittedData] = useState<AminoFormValues | null>(
    null,
  )

  const defaultValues = useDefaultValues()
  const schema = useValidationSchema()

  const { control, handleSubmit: submitWrapper } = useForm<AminoFormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  })

  const handleCopy = (value: string) => {
    setCopiedTextValue(true)
    navigator.clipboard.writeText(value)
  }

  return (
    <>
      <Header />
      <PageContainer>
        <AminoForm
          control={control}
          onSubmit={submitWrapper(setSubmittedData)}
        />
        <AminoAlignment
          onCopy={handleCopy}
          control={control}
          state={submittedData}
        />
        <AlertContainer
          open={Boolean(copiedTextValue)}
          message={<Alert color="info">Text copied</Alert>}
          autoHideDuration={1000}
          onClose={() => setCopiedTextValue(false)}
        />
      </PageContainer>
    </>
  )
}

export default AminoToolPage

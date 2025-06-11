import { AminoToolPage } from "#/pages/AminoToolPage"
import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AminoToolPage />
    </ThemeProvider>
  )
}

export default App

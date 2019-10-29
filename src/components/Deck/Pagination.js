import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Pagination from 'material-ui-flat-pagination'

const theme = createMuiTheme()

const Page = ({ offset, setOffset, count }) => {
  return (
    <div style={style}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={24}
          offset={offset}
          total={count}
          onClick={(e, offset) => {
            e.preventDefault()
            setOffset(offset)
          }}
        />
      </MuiThemeProvider>
    </div>
  )
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10px',
}

export default Page

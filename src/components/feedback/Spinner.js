import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Spinner = () => {
  return (
    <div style={userStyle}>
      <CircularProgress size='30vw' />
    </div>
  )
}

const userStyle = {
  height: '80vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default Spinner

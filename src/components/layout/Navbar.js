import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NavbarDrawer from './NavbarDrawer'
import { useLocation, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function Navbar() {
  const { pathname } = useLocation()
  const { goBack } = useHistory()
  const classes = useStyles()
  const [drawer, setDrawer] = useState(false)
  return (
    <nav className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={() => setDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Shadow Verse
          </Typography>
          {pathname !== '/' && (
            <Button onClick={() => goBack()} style={{ color: 'white' }}>
              Back
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <NavbarDrawer drawer={drawer} setDrawer={() => setDrawer(false)} />
    </nav>
  )
}

export default Navbar

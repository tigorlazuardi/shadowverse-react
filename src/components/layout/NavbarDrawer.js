import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Home from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

const NavbarDrawer = ({ drawer, setDrawer }) => {
  const classes = useStyles()
  return (
    <Drawer open={drawer} onClose={() => setDrawer(false)}>
      <List>
        <ListItem component={Link} to={'/'} className={classes.list}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default NavbarDrawer

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    // minWidth: 375,
  },
})

function createData(name, unevolved, evolve) {
  return { name, unevolved, evolve }
}

const InfoTable = ({ hero }) => {
  const rows = [
    createData('Attack', hero.atk, hero.evo_atk),
    createData('Life', hero.life, hero.evo_life),
    createData('Cost', hero.cost, hero.cost),
  ]
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label='Card Info'>
        <TableHead>
          <TableRow>
            <TableCell>{hero.card_name}</TableCell>
            <TableCell align='center'>Unevolved</TableCell>
            <TableCell align='center'>Evolve</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='center'>{row.unevolved}</TableCell>
              <TableCell align='center'>{row.evolve}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default InfoTable

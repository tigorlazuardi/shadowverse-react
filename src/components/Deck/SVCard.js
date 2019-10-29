import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
  },
  cardMedia: {
    minHeight: '10vh',
    maxHeight: 500,
    maxWidth: 600,
    backgroundSize: '100% 100%',
  },
  cardContent: {
    height: 200,
  },
})

const SVCard = ({ hero: { card_name, description, id } }) => {
  const classes = useStyles()
  if (!card_name) {
    return null
  } else {
    return (
      <Card className={classes.card}>
        <CardActionArea component={Link} to={'/card/' + id}>
          <CardMedia
            className={classes.cardMedia}
            component='img'
            alt='Contemplative Reptile'
            image={`https://shadowverse-portal.com/image/card/phase2/common/C/C_${id}.png`}
            title='Contemplative Reptile'
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant='h5' component='h2'>
              {card_name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size='small'
            color='primary'
            component={Link}
            to={'/card/' + id}>
            Detail
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default SVCard

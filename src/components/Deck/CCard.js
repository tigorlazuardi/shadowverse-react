import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: '100vw',
  },
  cardMedia: {
    minHeight: '10vh',
    maxHeight: 1000,
    maxWidth: 1000,
    backgroundSize: '100% 100%',
  },
  cardContent: {
    minHeight: 150,
  },
})

const CCard = ({
  hero: { card_name, evo_description, description, id, skill_disc },
}) => {
  const classes = useStyles()
  let skill = skill_disc || 'N/A'
  if (!card_name) {
    return null
  } else {
    return (
      <Card className={classes.card}>
        {evo_description && (
          <CardHeader
            title='Unevolved'
            titleTypographyProps={{
              align: 'center',
              color: 'primary',
            }}></CardHeader>
        )}
        <CardMedia
          className={classes.cardMedia}
          component='img'
          alt='Contemplative Reptile'
          image={`https://shadowverse-portal.com/image/card/phase2/common/C/C_${id}.png`}
          title='Contemplative Reptile'
        />
        <CardContent className={classes.cardContent}>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            style={{ minHeight: 125 }}>
            {description}
          </Typography>

          <Typography variant='body1' component='p' style={{ marginTop: 20 }}>
            Effect
          </Typography>

          <Typography variant='body2' color='textSecondary' component='p'>
            {skill}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default CCard

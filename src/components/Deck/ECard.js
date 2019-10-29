import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {},
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

const ECard = ({
  hero: { card_name, evo_description, id, skill_disc, evo_skill_disc },
}) => {
  let skill = evo_skill_disc || skill_disc || 'N/A'
  const classes = useStyles()
  if (!card_name) {
    return null
  } else {
    return (
      <Card className={classes.card}>
        <CardHeader
          title='Evolved'
          titleTypographyProps={{
            align: 'center',
            color: 'secondary',
          }}></CardHeader>
        <CardMedia
          className={classes.cardMedia}
          component='img'
          alt={card_name}
          image={`https://shadowverse-portal.com/image/card/phase2/common/E/E_${id}.png`}
          title={card_name}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            style={{ minHeight: 125 }}>
            {evo_description}
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

export default ECard

import React, { useState, useEffect } from 'react'
import axios from '../config/axios'
import { useParams } from 'react-router-dom'
import Spinner from '../components/feedback/Spinner'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CCard from '../components/Deck/CCard'
import ECard from '../components/Deck/ECard'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import InfoTable from '../components/Deck/InfoTable'

const SingleCard = () => {
  const [card, setCard] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    setLoading(true)
    axios
      .get('/cards/' + id)
      .then(({ data }) => setCard(data))
      .catch(console.log)
      .finally(() => setLoading(false))
  }, [id])
  if (loading) {
    return <Spinner />
  } else {
    return (
      card && (
        <Container>
          <Card style={{ margin: '20px 0px', padding: '20px' }}>
            <Typography variant='h5' align='center'>
              {card.card_name}
            </Typography>
          </Card>
          <Grid container spacing={2} justify='center'>
            <Grid item xs={12} sm={6}>
              <CCard hero={card} />
            </Grid>
            {card.evo_description && (
              <Grid item xs={12} sm={6}>
                <ECard hero={card} />
              </Grid>
            )}
            <Grid item xs={12}>
              <InfoTable hero={card} />
            </Grid>
          </Grid>
        </Container>
      )
    )
  }
}

export default SingleCard

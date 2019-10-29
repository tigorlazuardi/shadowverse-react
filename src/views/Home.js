import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import axios from '../config/axios'
import Spinner from '../components/feedback/Spinner'
import SVCard from '../components/Deck/SVCard'
import Pagination from '../components/Deck/Pagination'

export default class Home extends Component {
  state = {
    cards: [],
    loading: false,
    count: 0,
    offset: 0,
  }

  async componentDidMount() {
    this.setState({ loading: true })
    try {
      let response = await axios.get('/cards?_page=1&_limit=24&_sort=id')
      this.setState({
        cards: response.data,
        count: Number(response.headers['x-total-count']),
      })
    } catch (err) {
      console.log(err)
    } finally {
      this.setState({ loading: false })
    }
  }

  setOffset = async (val) => {
    this.setState({ offset: val, loading: true })
    try {
      let response = await axios.get(
        `/cards?_page=${val / 24 + 1}&_limit=24&_sort=id`
      )
      this.setState({
        cards: response.data,
      })
    } catch (err) {
      console.log(err)
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { loading, cards, count, offset } = this.state
    if (loading) {
      return <Spinner />
    } else {
      return (
        <Container maxWidth={false}>
          {count && (
            <Pagination
              offset={offset}
              setOffset={this.setOffset}
              count={count}
            />
          )}
          <Grid container spacing={2} justify='center'>
            {cards.map(
              (el) =>
                el.card_name && (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={el.id}>
                    <SVCard hero={el} />
                  </Grid>
                )
            )}
          </Grid>
        </Container>
      )
    }
  }
}

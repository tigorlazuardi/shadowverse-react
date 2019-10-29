import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import axios from '../config/axios'
import Spinner from '../components/feedback/Spinner'
import SVCard from '../components/Deck/SVCard'
import Pagination from '../components/Deck/Pagination'
import TextField from '@material-ui/core/TextField'
import debounce from 'lodash.debounce'

export default class Home extends Component {
  constructor() {
    super()
    this.searchDebounced = debounce(this.search, 500)
    this.state = {
      cards: [],
      loading: false,
      count: 0,
      offset: 0,
      query: '',
      limit: 18,
    }
  }

  handleSearch = (event) => {
    this.setState({ query: event.target.value })
    this.searchDebounced()
  }

  async search() {
    const { limit, query } = this.state
    if (!query) {
      this.getAllCards()
    } else {
      this.setState({ loading: true })
      try {
        let response = await axios.get(
          `/cards?_page=1&_limit=${limit}&_sort=id&q=${query}`
        )
        console.log(response.data)
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
  }

  async componentDidMount() {
    this.setState({ loading: true })
    try {
      let response = await axios.get(
        `/cards?_page=1&_limit=${this.state.limit}&_sort=id`
      )
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

  async getAllCards() {
    this.setState({ loading: true })
    try {
      let response = await axios.get(
        `/cards?_page=1&_limit=${this.state.limit}&_sort=id`
      )
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
    const { query, limit } = this.state
    this.setState({ offset: val, loading: true })
    let url = `/cards?_page=${val / limit + 1}&_limit=18&_sort=id`
    if (query) {
      url += `&q=${query}`
    }
    try {
      let response = await axios.get(url)
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
    const { loading, cards, count, offset, limit, query } = this.state
    return (
      <Container maxWidth={false}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            label='Search'
            margin='normal'
            variant='outlined'
            fullWidth={true}
            value={query}
            onChange={this.handleSearch}
          />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          count > 0 && (
            <Pagination
              offset={offset}
              setOffset={this.setOffset}
              count={count}
              limit={limit}
            />
          )
        )}
        {loading ? (
          ''
        ) : (
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
        )}
      </Container>
    )
  }
}

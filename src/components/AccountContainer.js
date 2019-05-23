import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      searchInput: ''
    }

  }

  componentDidMount = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(response => response.json())
      .then(transactions => {
        this.setState({ transactions });
      })
      .catch(error => console.error(error))
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  filterTransactionsBySearch = () => {
    return this.state.transactions.filter(transaction => {
      return transaction.category.includes(this.state.searchInput)
    })
  }


  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.filterTransactionsBySearch()} />
        {/* <TransactionsList transactions={this.state.transactions}/> */}
      </div>
    )
  }
}

export default AccountContainer

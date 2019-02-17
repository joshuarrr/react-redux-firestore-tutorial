import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './testActions'

// get data from store
const mapState = state => ({
  data: state.test.data
})

// dispach actions (passed to component props)
const actions = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props
    return (
      <div>
        <h1>Test</h1>
        <h2>The answer is: {data}</h2>
        <Button onClick={incrementCounter} color='green' content='increment' />
        <Button onClick={decrementCounter} color='red' content='decrement' />
      </div>
    )
  }
}

// connect HOC brings state and actions into component
export default connect(mapState, actions)(TestComponent)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import { deleteEvent } from '../eventActions'


// get events from store (map state to props )
const mapState = state => ({
  events: state.events
})

// actions
const actions = {
  deleteEvent
}

class EventDashboard extends Component {

  handleDeleteEvent = eventId => () => {
    // * using state *
    // const updatedEvents = this.state.events.filter(e => e.id !== eventId)
    // this.setState({
    //   events: updatedEvents
    // })

    /* using redux */
    this.props.deleteEvent(eventId)
  }

  render() {
    const { events } = this.props
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
         
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard)

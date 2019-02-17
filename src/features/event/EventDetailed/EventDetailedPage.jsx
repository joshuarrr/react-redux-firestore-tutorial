import React from 'react'
import { connect } from 'react-redux'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'
import { Grid } from 'semantic-ui-react'


// get state from store, and router props (attached to component) as ownProps 
const mapState = (state, ownProps) => {
  // get event id from router
  const eventId = ownProps.match.params.id

  // in case no event from params, prevent error
  let event = {}

  // check if theres and event and there is events in the store
  if (eventId && state.events.length > 0) {
    // get the event from the store that matches the params
    event = state.events.filter(event => event.id === eventId)[0]
  }
  
  // map the event to props
  return {event}
}

const EventDetailedPage = ({event}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees}/>
      </Grid.Column>
      <h1>Event Detailed Page</h1>
    </Grid>
  )
}

export default connect(mapState)(EventDetailedPage)

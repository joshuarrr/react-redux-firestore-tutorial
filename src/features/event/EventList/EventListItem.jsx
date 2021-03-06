import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

class EventListItem extends Component {
  render() {
    const { event, deleteEvent } = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListAttendee attendee={attendee} key={attendee.id} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            color="teal"
            floated="right"
            content="View"
            as={Link}
            to={`/event/${event.id}`}
          />
          <Button
            as="a"
            color="red"
            floated="right"
            content="Delete"
            onClick={deleteEvent(event.id)}
          />
        </Segment>
      </Segment.Group>
    )
  }
}

export default EventListItem

import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import { Button, Icon } from 'semantic-ui-react'
import Script from 'react-load-script'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete'
import { incrementCounter, decrementCounter } from './testActions'

// get data from store (mapStateToProps)
const mapState = state => ({
  data: state.test.data
})

// dispach actions (passed to component props)
const actions = {
  incrementCounter,
  decrementCounter
}

const Marker = () => <Icon name='marker' size='big' color='red'/>

class TestComponent extends Component {
  state = {
    addres: '',
    scriptLoaded: false
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

  handleFormSubmit = event => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  onChange = address => this.setState({ address })

  handleScriptLoad = () => {
    this.setState({
      scriptLoaded: true
    })
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }
    const { incrementCounter, decrementCounter, data } = this.props
    return (
      <div>
        {/* <Script 
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgserDogubM5kQtUGBrGIBbFaKUaF4_98&libraries=places" 
          onLoad={this.handleScriptLoad}
        /> */}
        <h1>Test</h1>
        <h2>The answer is: {data}</h2>
        {/*  mapDispatchToProps */}
        <Button onClick={incrementCounter} color='green' content='increment' />
        <Button onClick={decrementCounter} color='red' content='decrement' />
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
          {
            this.state.scriptLoaded && 
            <PlacesAutocomplete inputProps={inputProps} />
          }
          <button type='submit'>Submit</button>
        </form>
        <div style={{ height: '300px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAgserDogubM5kQtUGBrGIBbFaKUaF4_98' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

// connect HOC brings state and actions into component
export default connect(
  mapState,
  actions
)(TestComponent)

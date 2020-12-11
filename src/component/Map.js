import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

require('dotenv').config()

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 45.5017,
      lng: -73.5673
    }
  }
  render() {
    return (
      <div className='map' style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAPS_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={11}
        />
      </div>
    )
  }
}

export default Map;

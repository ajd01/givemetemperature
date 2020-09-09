import React, { useState } from 'react'

import MapView, { Marker } from 'react-native-maps'

import { Context } from '../store'

const Map = () => {
  const { store } = React.useContext(Context)

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  })

  if (store.data && store.data.lat && store.data.lat !== region.latitude) {
    setRegion({
      latitude: parseFloat(store.data.lat),
      longitude: parseFloat(store.data.lng),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    })
  }

  return region.latitude !== 0 &&
    <MapView
      onRegionChangeComplete={region => setRegion(region)}
      showsUserLocation
      showsMyLocationButton
      region={region}
      style={{ flex: 10, width: '100%', height: 80 }}
    >
      <Marker
        coordinate={region}
        pinColor='blue'
      />
    </MapView>
}

export default Map

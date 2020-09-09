import * as React from 'react'

import { Context } from '../store'

import getEnvVars from '../environment'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const { googleAPI } = getEnvVars()

export function Search () {
  const { store, dispatch } = React.useContext(Context)

  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      /* This help to debug API key errors.. Really handy!
      onFail={error => console.error('*********************Error GooglePlacesAutocomplete:', error)} */
      onPress={(resp, details = null) => {
        // 'details' is provided when fetchDetails = true
        const data = {
          lat: details.geometry.location.lat,
          lng: details.geometry.location.lng,
          dir: details.formatted_address
        }
        dispatch({ type: 'setData', data })
        this.GooglePlacesRef.setAddressText('')
      }}
      ref={(instance) => { this.GooglePlacesRef = instance }}
      fetchDetails
      query={{
        key: googleAPI,
        language: 'en'
      }}
      styles={{
        textInputContainer: {
          backgroundColor: '#cccccc',
          borderTopWidth: 0,
          borderBottomWidth: 0,
          zIndex: 9999,
          width: '98%'
        },
        textInput: {
          marginLeft: 0,
          marginRight: 0,
          zIndex: 9999,
          height: 38,
          color: '#595959',
          backgroundColor: '#cccccc',
          fontSize: 16,
          width: '98%'
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
          zIndex: -1
        },
        listView: {
          position: 'absolute',
          zIndex: 9999,
          top: 40
        },
        row: {
          backgroundColor: '#cccccc'
        }
      }}
    />
  )
}

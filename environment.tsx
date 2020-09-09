/*****************************
* environment.js
* path: '/environment.js' (root of your project)
******************************/

import Constants from 'expo-constants'
import { Platform } from 'react-native'

const localhost =
 Platform.OS === 'ios' ? 'localhost:8080' : '10.0.2.2:8080'

const ENV = {
  dev: {
    googleAPI: 'AIzaSyBRYsqyPql9C2IuLdXEOvIn63IyD0Hn8RE',
    openweatherAPI: '4f8c0cffb6b2478bac70bae2ceae2c1d'
  }
}

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev
  } else if (env === 'staging') {
    return ENV.dev
  } else if (env === 'prod') {
    return ENV.dev
  }
}

export default getEnvVars

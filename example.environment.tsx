/*****************************
* environment.js
* path: '/environment.js' (root of your project)
*
* Add your googleAPI and openweatherAPI
* Then renemae this file to environment.tsx
*
******************************/

import Constants from 'expo-constants'
import { Platform } from 'react-native'

const localhost =
 Platform.OS === 'ios' ? 'localhost:8080' : '10.0.2.2:8080'

const ENV = {
  dev: {
    googleAPI: 'API_KEY',
    openweatherAPI: 'API_KEY'
  }
}

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  return ENV.dev
}

export default getEnvVars

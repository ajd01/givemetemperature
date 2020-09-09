import { StatusBar } from 'expo-status-bar'
import React, { useReducer } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'

import { Context, InitialState, Reducer } from './store'

export default function App () {
  const [store, dispatch] = useReducer(Reducer, InitialState)
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Context.Provider value={{ store, dispatch }}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Context.Provider>
    )
  }
}

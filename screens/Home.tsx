import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Search } from '../components/Serach'
import { Text, View } from '../components/Themed'
import { Info } from '../components/Info'
import { Last } from '../components/Last'
import { Context, getWeather } from '../store'

export default function TabOneScreen () {
  const { store, dispatch } = React.useContext(Context)

  async function fetchData () {
    dispatch({ type: 'setFetch', fetch: false })
    const data = await getWeather(store.data)
    if (data.data) {
      dispatch({ type: 'setWeather', weather: data.data })
    }
  }

  useEffect(() => {
    try {
      if (store.fetch) {
        fetchData()
      }
    } catch (e) {
      console.log('API Error:', e)
    }
  }, [store.data])

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Search for a city:</Text>
      <Search />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Info />
        <Last />
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f2f2f2'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 35,
    position: 'absolute',
    left: 15,
    top: 15,
    right: 15,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15
  }
})

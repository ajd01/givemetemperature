import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { FontAwesome5, MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons'
import { Context } from '../store'

import Map from './Map'

export function Info () {
  const { store } = React.useContext(Context)

  return store.data.dir
    ? <View>
      <Text style={styles.cityName}>
        <Entypo name='location' size={32} />
        {store.data && store.data.dir}
      </Text>
      <View style={styles.wrapper}>
        <Text style={styles.child}>
          <FontAwesome5 name='temperature-high' size={32} />
          <Text>
            {store.weather && store.weather.main && store.weather.main.temp}
            <MaterialCommunityIcons name='temperature-celsius' size={22} />
          </Text>
        </Text>
        <Text style={styles.child}>
          <MaterialCommunityIcons name='coolant-temperature' size={32} />
          {store.weather && store.weather.main && store.weather.main.pressure}
        </Text>
        <Text style={styles.childOne}>
          <Entypo name='icloud' size={32} />
          {store.weather && store.weather.main && store.weather.main.humidity}
        </Text>
        <Text style={styles.child}>
          <AntDesign name='arrowup' size={32} />
          {store.weather && store.weather.main && store.weather.main.temp_max}
          <MaterialCommunityIcons name='temperature-celsius' size={22} />
        </Text>
        <Text style={styles.child}>
          <AntDesign name='arrowdown' size={32} />
          {store.weather && store.weather.main && store.weather.main.temp_min}
          <MaterialCommunityIcons name='temperature-celsius' size={22} />
        </Text>
      </View>
      <Map />
      </View>
    : <Text>
        Loock for a plate to know the temperature
      </Text>
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center'
  },
  cityName: {
    width: '100%',
    height: 80,
    marginTop: 80,
    textAlign: 'center'
  },
  child: {
    fontSize: 25,
    display: 'flex',
    height: 50,
    width: '50%',
    textAlign: 'center'
  },
  childOne: {
    fontSize: 25,
    display: 'flex',
    height: 50,
    width: '100%',
    textAlign: 'center'
  }
})

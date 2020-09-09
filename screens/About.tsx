import * as React from 'react'
import { StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'

export default function TabTwoScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give Me My Temperature</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <Text style={styles.title}>React Native app develop by Audelio Lujan</Text>
      <Text style={styles.title}>https://github.com/ajd01</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})

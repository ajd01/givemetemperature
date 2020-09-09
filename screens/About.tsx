import * as React from 'react'
import { StyleSheet, Linking } from 'react-native'

import { Text, View } from '../components/Themed'

export default function TabTwoScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give Me My Temperature</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <Text style={styles.title}>React Native app develop by:</Text>
      <Text style={styles.title}>Audelio Lujan</Text>
      <Text
        onPress={() => Linking.openURL('https://github.com/ajd01')}
        style={styles.title}
      >
          https://github.com/ajd01
      </Text>
      <Text
        onPress={() => Linking.openURL('https://audelio.dev')}
        style={styles.title}
      >
          https://audelio.dev
      </Text>
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
    textAlign: 'center',
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})

import * as React from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { Context } from '../store'

export function Last () {
  const { store, dispatch } = React.useContext(Context)

  return store.data.dir
    ? <View>
      <Text style={styles.title}>Last viewed locations:</Text>
      {store.lastView.length > 0 &&
          store.lastView.map((last, i) => (
            <View key={i} style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
              <TouchableOpacity
                style={styles.Button}
                onPress={() =>
                  dispatch({
                    type: 'showOld',
                    data: last.data,
                    weather: last.weather
                  })}
              >
                <Text>{last.data && last.data.dir}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ButtonDelete}
                onPress={() =>
                  dispatch({
                    type: 'removeLastView',
                    dir: last.data.dir
                  })}
              >
                <MaterialIcons name='delete' />
              </TouchableOpacity>
            </View>
          ))}
      </View>
    : <View />
}

const styles = StyleSheet.create({
  Button: {
    padding: 12,
    color: '#fff',
    backgroundColor: '#dbd3d8',
    alignItems: 'center',
    width: '80%'
  },
  ButtonDelete: {
    padding: 12,
    backgroundColor: '#F95738',
    alignItems: 'center',
    width: '20%'
  }
})

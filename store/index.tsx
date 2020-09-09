import React from 'react'

import axios from 'axios'

import getEnvVars from '../environment'

export const Context = React.createContext()

const { openweatherAPI } = getEnvVars()

export const InitialState = {
  data: {},
  weather: {},
  lastView: [],
  fetch: false
}

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return InitialState
    case 'setData':
      return { ...state, data: action.data, fetch: true }
    case 'setWeather':
      return addLastView(state, {
        weather: action.weather,
        lastView: {
          data: state.data,
          weather: action.weather
        }
      })
    case 'setFetch':
      return { ...state, fetch: action.fetch }
    case 'removeLastView':
      return removeLastView(state, action)
    case 'showOld':
      return { ...state, data: action.data, weather: action.weather }
    default:
      return state
  }
}

const removeLastView = (state, action) => {
  const lastView = state.lastView.filter(v => v.data.dir !== action.dir)
  return {
    ...state,
    lastView: lastView
  }
}

const addLastView = (state, action) => {
  const lastView = state.lastView
  const count = lastView.filter(v => v.data.dir === action.lastView.data.dir).length
  if (count < 1) {
    lastView.push(action.lastView)
    if (lastView.length > 5) {
      lastView.shift()
    }
  }
  return {
    ...state,
    lastView: lastView,
    weather: action.weather
  }
}

export const getWeather = async ({ lat, lng }) => {
  return await axios.get(`https:\\api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${openweatherAPI}`)
}

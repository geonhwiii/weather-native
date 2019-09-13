import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const Weather = ({ temp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Icon name="weather-lightning-rainy" size={96}/>
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
  }
})

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ])
}

export default Weather;
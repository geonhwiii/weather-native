import React, { Component } from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';
// ! OPEN_WEATHER_MAP API_KEY
const API_KEY = "71d6a114c4df1a0bcfc6e76248812af1";

export default class App extends Component {
  state = {
    isLoading: true,
    temp: 0
  }

  getWeather = async (latitude, longitude) => {
    const { data: { main: { temp }, weather } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`)
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main
    })
  }
  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude }  } = await Location.getCurrentPositionAsync();
      // TODO: SEND TO API AND GET WEATHER
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false })
    } catch (e) {
      Alert.alert("Can't find you.", "So Sad...");
    }
    
  }
  componentDidMount = () => {
    this.getLocation()
  };
  
  render() {
    const { isLoading, temp, condition } = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>
    );
  }
  
}


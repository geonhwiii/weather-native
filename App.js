import React, { Component } from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class App extends Component {
  state = {
    isLoading: true
  }
  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      // TODO: SEND TO API AND GET WEATHER
      this.setState({ isLoading: false })
    } catch (e) {
      Alert.alert("Can't find you.", "So Sad...");
    }
    
  }
  componentDidMount = () => {
    this.getLocation()
  };
  
  render() {
    const { isLoading } = this.state;
    return (
      isLoading ? <Loading /> : null
    );
  }
  
}


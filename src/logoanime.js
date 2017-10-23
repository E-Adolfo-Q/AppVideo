/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Image,
  Easing
} from 'react-native';

import Video from 'react-native-video';
import styles from './style';

export default class LogoAnimated extends Component {

  constructor(){
    super();
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount(){
    this.spin()
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue:1,
        duration: 5000,
        easing: Easing.linear
      }
    ).start(() => this.spin() )
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange:[0,1],
      outputRange:['0deg', '180deg']
    })

    const url = 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'
    return (
         <View style={styles.content}>
            <Animated.Image
              style={{
                width:227,
                height:200,
                transform:[{rotate: spin}] }}
                source={{uri: url}}
            />
      </View>
    );
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import Video from 'react-native-video';
import styles from './style';

import LogoAnimated from './logoanime';

 class Appvideo extends Component {
  render() {   
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
         />
         <Video
            source={require('./video/oceano.mp4')}
            rate={1.0}
            volume={0}
            muted={false}
            resizeMode={"cover"}
            style={styles.video}
         />
         <LogoAnimated />
      </View>
    );
  }
}


AppRegistry.registerComponent('Appvideo', () => Appvideo);

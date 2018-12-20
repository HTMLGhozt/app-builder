import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import { pages } from '../../App';
import MenuIcon from '../Components/Icons/MenuIcon';
import iconLibrary from '../Components/Icons/IconLibrary.json';
import backgroundImage from '../../assets/splash.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.35,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
});

const HomeScreen = ({ navigation }) => (
  <ImageBackground
    source={backgroundImage}
    style={styles.container}
    resizeMode="cover"
  >
    <View style={styles.overlay} />
    {pages.map(page => (
      <MenuIcon
        key={page}
        navigation={navigation}
        title={page}
        {...iconLibrary[page]}
      />
    ))}
    {/* </View> */}
  </ImageBackground>
);

export default HomeScreen;

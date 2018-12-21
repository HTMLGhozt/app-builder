import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';

import { pages } from '../../App';
import MenuIcon from '../Components/Icons/MenuIcon';
import iconLibrary from '../Components/Icons/IconLibrary.json';
import backgroundImage from '../../assets/splash.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  title: {
    fontSize: 40,
    color: 'white',
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
  },
});

class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={backgroundImage}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
        blurRadius={15}
      >
        <View style={styles.overlay} />
        <Text style={styles.title}>Bisbee Directory</Text>
        <View style={styles.container}>
          {pages.map(page => (
            <MenuIcon
              key={page}
              navigation={navigation}
              title={page}
              {...iconLibrary[page]}
            />
          ))}
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen;

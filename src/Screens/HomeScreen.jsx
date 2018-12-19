import React from 'react';
import { View, StyleSheet } from 'react-native';

import { pages } from '../../App';
import MenuIcon from '../Components/Icons/MenuIcon';
import iconLibrary from '../Components/Icons/IconLibrary.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

const HomeScreen = ({ navigation }) => (
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
);

export default HomeScreen;

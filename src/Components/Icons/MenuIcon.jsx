import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Icons from '@expo/vector-icons';

import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  square: {
    alignItems: 'center',
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: 'black',
    margin: '2%',
    padding: 5,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

class MenuIcon extends React.Component {
  buildIcon = () => {
    const { iconLibrary, iconName } = this.props;
    const IconElement = Icons[iconLibrary];
    return <IconElement name={iconName} size={50} color="black" />;
  }

  handlePress = () => {
    const { navigation, title } = this.props;
    navigation.navigate(title);
  }

  render() {
    const { title } = this.props;

    return (
      <TouchableHighlight onPress={this.handlePress} style={styles.square}>
        <View>
          {this.buildIcon()}
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default MenuIcon;

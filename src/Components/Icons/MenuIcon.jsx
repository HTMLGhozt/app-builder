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
    display: 'flex',
    width: '24%',
    height: '13%',
    minWidth: 80,
    minHeight: 95,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: 'white',
    margin: '3%',
    marginBottom: '5%',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

class MenuIcon extends React.Component {
  buildIcon = () => {
    const { iconLibrary, iconName } = this.props;
    const IconElement = Icons[iconLibrary];
    return <IconElement style={{ alignSelf: 'center' }} name={iconName} size={50} color="white" />;
  }

  handlePress = () => {
    const { navigation, title } = this.props;

    navigation.navigate(title, { category: title });
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

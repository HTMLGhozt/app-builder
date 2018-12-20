import React from 'react';
import {
  TouchableHighlight,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  ImageBackground,
  View,
} from 'react-native';

import backgroundImage from '../../assets/splash.jpg';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  listItem: {
    width: '100%',
    height: 50,
    padding: 10,
    borderBottomWidth: 3,
    borderColor: 'lightgray',
  },
  listTitle: {
    fontSize: 20,
    color: 'white',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
});

class ListScreen extends React.Component {
  handleClick = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page.replace(' ', ''));
  }

  renderItem = ({ item: pageName, index }) => (
    <View>
      <View style={{ ...styles.overlay, opacity: index % 2 ? 0.35 : 0.5 }} />
      <TouchableHighlight
        style={styles.listItem}
        onPress={() => this.handleClick(pageName)}
      >
        <Text style={styles.listTitle}>{pageName}</Text>
      </TouchableHighlight>
    </View>
  )

  render() {
    const { pages } = this.props;

    return (
      <ScrollView
        scrollsToTop={false}
        contentContainerStyle={{ flex: 1 }}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.container}
          resizeMode="cover"
        >
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={pages}
            renderItem={this.renderItem}
          />
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default ListScreen;

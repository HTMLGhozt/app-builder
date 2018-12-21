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
    borderBottomWidth: 1,
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
  title: {
    fontSize: 40,
    color: 'white',
    paddingBottom: 5,
    textAlign: 'center',
  },
});

class ListScreen extends React.PureComponent {
  handleClick = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page.replace(/[^a-zA-z]/g, ''));
  }

  renderItem = ({ item: pageName, index }) => (
    <View>
      <View style={{ ...styles.overlay, opacity: index % 2 ? 0 : 0.25 }} />
      <TouchableHighlight
        style={styles.listItem}
        onPress={() => this.handleClick(pageName)}
      >
        <Text style={styles.listTitle}>{pageName}</Text>
      </TouchableHighlight>
    </View>
  )

  render() {
    const { pages, title } = this.props;

    return (
      <ScrollView
        scrollsToTop={false}
        contentContainerStyle={{ flex: 1 }}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.container}
          resizeMode="cover"
          blurRadius={15}
        >
          <View style={{ ...styles.overlay, opacity: 0.35 }} />
          <Text style={styles.title}>{title}</Text>
          <FlatList
            keyExtractor={page => page}
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

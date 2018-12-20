import React from 'react';
import {
  TouchableHighlight,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
} from 'react-native';

import details from '../../details';
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
  textInput: {
    backgroundColor: 'white',
    fontSize: 20,
    opacity: 0.5,
    height: 40,
  },
});

class SearchScreen extends React.Component {
  state = {
    text: '',
  }

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

  getFilteredList = () => {
    const { text } = this.state;
    if (text.length) {
      return details
        .filter((page) => {
          if (page && typeof page.name === 'string') {
            // `.toLowerCase` allows search to ignore case.
            return page.name.toLowerCase().includes(text.toLowerCase());
          }
          return false;
        })
        .map(page => page.name);
    }
    return [];
  }

  render() {
    const { text } = this.state;
    const filteredList = this.getFilteredList();
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
          <Text style={styles.title}>Search</Text>
          <TextInput
            onChangeText={changedText => this.setState({ text: changedText })}
            value={text.length ? text : ''}
            style={styles.textInput}
          />
          {(text && filteredList)
            ? (
              <FlatList
                contentContainerStyle={{ flexGrow: 1 }}
                data={filteredList}
                renderItem={this.renderItem}
              />
            ) : <React.Fragment></React.Fragment>
          }
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default SearchScreen;

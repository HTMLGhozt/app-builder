import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  FlatList,
  // StyleSheet,
} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

class ListScreen extends React.Component {
  handleClick = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page.replace(' ', ''));
  }

  renderItem = ({ item: pageName }) => (
    <View>
      <TouchableHighlight onPress={() => this.handleClick(pageName)}>
        <View>
          <Text>{pageName}</Text>
        </View>
      </TouchableHighlight>
    </View>
  )

  render() {
    const { pages } = this.props;

    return (
      <ScrollView scrollsToTop={false}>
        <FlatList
          data={pages}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

export default ListScreen;

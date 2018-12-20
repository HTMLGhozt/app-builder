import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  Platform,
  Linking,
  // StyleSheet,
} from 'react-native';
import Markdown from 'react-native-markdown-renderer';

class PageScreen extends React.Component {
  handleLink = (type, url) => {
    let newURL = '';
    switch (type) {
      case 'tel':
        newURL = this.handleCall(url);
        break;
      case 'web':
      default:
        newURL = url;
    }
    Linking.canOpenURL(newURL).then((supported) => {
      if (!supported) {
        console.info(`Can't handle url: ${newURL}`);
      }
      return Linking.openURL(newURL);
    }).catch((error) => {
      console.error('An error occurred', error);
    });
  }

  handleCall = (url) => {
    const phonePreface = Platform.OS === 'ios' ? 'telprompt:' : 'tel:';
    return phonePreface + url;
  }

  render() {
    const {
      page: {
        name,
        description,
        website,
        // address,
        phone,
        // operationHours,
      },
    } = this.props;
    return (
      <ScrollView scrollsToTop={false}>
        <View>
          <Text>{name}</Text>
          <TouchableHighlight onPress={() => this.handleLink('tel', phone)}>
            <Text>{phone}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.handleLink('web', website)}>
            <Text>{website}</Text>
          </TouchableHighlight>
          <Markdown>{description}</Markdown>
        </View>
      </ScrollView>
    );
  }
}

export default PageScreen;

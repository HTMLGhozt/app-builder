import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  Platform,
  Linking,
  StyleSheet,
  Image,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Markdown from 'react-native-markdown-renderer';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    padding: 5,
    marginBottom: 10,
  },
  clickableText: {
    fontSize: 15,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});

class PageScreen extends React.PureComponent {
  handleLink = (type, url) => {
    let newURL = '';
    switch (type) {
      case 'map':
        newURL = this.handleMap();
        break;
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

  handleMap = () => {
    const {
      page: { latLng, name },
    } = this.props;

    return Platform.select({
      ios: `maps:0,0?q=${name}@${latLng}`,
      android: `geo:0,0?q=${latLng}(${name})`,
    });
  }

  handleCall = (url) => {
    const phonePreface = Platform
      .select({ ios: 'telprompt:', android: 'tel:' });
    return phonePreface + url;
  }

  render() {
    const {
      page: {
        name,
        description,
        website,
        address,
        phone,
        // operationHours,
        image,
      },
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        {phone && (
          <TouchableHighlight onPress={() => this.handleLink('tel', phone)}>
            <Text style={styles.clickableText}>
              <FontAwesome name="phone" size={15} />
              {`  ${phone}`}
            </Text>
          </TouchableHighlight>
        )}
        {website && (
          <TouchableHighlight onPress={() => this.handleLink('web', website)}>
            <Text style={styles.clickableText}>
              <SimpleLineIcons name="globe" size={15} />
              {`  ${website}`}
            </Text>
          </TouchableHighlight>
        )}
        {address && (
          <TouchableHighlight onPress={() => this.handleLink('map')}>
            <Text style={styles.clickableText}>
              <MaterialCommunityIcons name="map-marker" size={15} />
              {`  ${address}`}
            </Text>
          </TouchableHighlight>
        )}
        <ScrollView scrollsToTop={false}>
          {image && <Image source={image} style={{ resizeMode: 'contain', width: '100%', height: 300 }} />}
          <Markdown>
            {description}
          </Markdown>
        </ScrollView>
      </View>
    );
  }
}

export default PageScreen;

import React from 'react';
import {
  TouchableHighlight,
  Text, StyleSheet,
  Linking,
  Platform,
} from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const styles = StyleSheet.create({
  clickableText: {
    fontSize: 15,
    paddingBottom: 5,
    paddingLeft: 10,
  },
});

class PageLinks extends React.PureComponent {
  formatURL = (type, url) => {
    const {
      page: { latLng, name },
    } = this.props;

    if (type === 'address') {
      return Platform.select({
        ios: `maps:0,0?q=${name}@${latLng}`,
        android: `geo:0,0?q=${latLng}(${name})`,
      });
    }
    if (type === 'website') {
      return Platform.select({
        ios: `telprompt:${url}`,
        android: `tel:${url}`,
      });
    }

    return url;
  }

  handleLink = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.info(`Can't handle url: ${url}`);
        }
        return Linking.openURL(url);
      })
      .catch((error) => {
        console.error('An error occurred', error);
      });
  }

  getIcon = (type) => {
    if (type === 'phone') {
      return <FontAwesome name="phone" size={15} />;
    }
    if (type === 'website') {
      return <SimpleLineIcons name="globe" size={15} />;
    }
    if (type === 'address') {
      return <MaterialCommunityIcons name="map-marker" size={15} />;
    }
    // return no-op
    return <React.Fragment />;
  }

  render() {
    const { website, address, phone } = this.props;
    const cardItems = { website, address, phone };
    return (
      <React.Fragment>
        { Object.entries(cardItems).map(([type, data]) => (
          <TouchableHighlight
            onPress={() => this.handleLink(this.formatURL(type, data))}
          >
            <Text style={styles.clickableText}>
              {this.getIcon(type)}
              {`  ${data}`}
            </Text>
          </TouchableHighlight>
        )) }
      </React.Fragment>
    );
  }
}

export default PageLinks;

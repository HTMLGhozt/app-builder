import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import Markdown from 'react-native-markdown-renderer';

import PageLinks from '../Components/RenderPageLinks';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    padding: 5,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 300,
  },
});

const PageScreen = ({ page }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{page.name}</Text>
    <PageLinks
      website={page.website}
      address={page.address}
      phone={page.phone}
      latLng={page.latLng}
    />
    <ScrollView scrollsToTop={false}>
      {page.image && (
        <Image source={page.image} style={styles.image} />
      )}
      <Markdown>
        {page.description}
      </Markdown>
    </ScrollView>
  </View>
);

export default PageScreen;

import React from 'react';

import PageScreen from '../Screens/PageScreen';

// The intent of `PageBuilder` is more readable with
// a declaritive return statement.
// eslint-disable-next-line arrow-body-style
const PageBuilder = (details) => {
  return details.reduce((accumilator, page) => {
    const pageName = page.name.replace(/[^a-zA-z]/g, '');

    return {
      ...accumilator,
      [pageName]: ({ navigation }) => (
        <PageScreen navigation={navigation} page={page} />
      ),
    };
  }, {});
};

export default PageBuilder;

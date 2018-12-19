import React from 'react';

import details from '../../details';
import ListScreen from '../Screens/ListScreen';

// The intent of `ListBuilder` is more readable with
// a declaritive return statement.
// eslint-disable-next-line arrow-body-style
const ListBuilder = (categories) => {
  return categories.reduce((accumilator, category) => {
    const pagesFiltered = details
      .filter(page => page.category === category)
      .map(page => page.name);
    return {
      ...accumilator,
      [category]: ({ navigation }) => (
        <ListScreen navigation={navigation} pages={pagesFiltered} />
      ),
    };
  }, {});
};

export default ListBuilder;

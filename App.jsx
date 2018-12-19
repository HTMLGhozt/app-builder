import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/Screens/HomeScreen';
import ListBuilder from './src/Components/ListBuilder';
import PageBuilder from './src/Components/PageBuilder';
// import DetailsScreen from './src/Screens/DetailsScreen';

export const pages = ['Dine', 'Shop', 'Play'];

const routes = {
  Home: HomeScreen,
  ...ListBuilder(pages),
  ...PageBuilder(),
};

const AppNavigator = createStackNavigator(
  routes, { initialRouteName: 'Home' },
);

export default createAppContainer(AppNavigator);

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './src/Screens/HomeScreen';
import ListBuilder from './src/Components/ListBuilder';
import PageBuilder from './src/Components/PageBuilder';

import details, { History } from './details';

export const pages = ['Dine', 'Shop', 'Play'];

const routes = {
  Home: HomeScreen,
  ...ListBuilder(pages, details),
  ...PageBuilder(details),
};

const AppStackNavigator = createStackNavigator(
  routes, { initialRouteName: 'Home' },
);

const AppNavigator = createBottomTabNavigator({
  Home: AppStackNavigator,
  ...PageBuilder(History),
});

export default createAppContainer(AppNavigator);

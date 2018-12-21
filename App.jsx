import { Animated, Easing } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './src/Screens/HomeScreen';
import SearchScreen from './src/Screens/SearchScreen';
import ListBuilder from './src/Components/ListBuilder';
import PageBuilder from './src/Components/PageBuilder';

import details from './details';

export const pages = ['Tours', 'History', 'Play', 'Services', 'Culture', 'Events', 'Dine', 'Visit', 'Art'];

const routes = {
  Home: HomeScreen,
  ...ListBuilder(pages, details),
  ...PageBuilder(details),
};

const AppStackNavigator = createStackNavigator(
  routes,
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

const AppNavigator = createBottomTabNavigator({
  Home: AppStackNavigator,
  Search: SearchScreen,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    labelStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 20,
    },
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
  },
});

export default createAppContainer(AppNavigator);

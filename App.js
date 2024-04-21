import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import GridView from './src/Screens/GridView/GridView';
import ListView from './src/Screens/ListView/ListView';
import Main from './src/Screens/Main/Main';
import Detail from './src/Screens/Detail/Detail';

const Stack = createSharedElementStackNavigator();

const App = () => {
  const sharedElements = React.useCallback(({route}) => {
    const {item} = route.params;
    const id = item.id;
    return [
      `image${id}`,
      `name${id}`,
      `price${id}`,
      `hp${id}`,
      `miles${id}`,
      `location${id}`,
      `date${id}`,
    ];
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="GridView" component={GridView} />
        <Stack.Screen name="ListView" component={ListView} />
        <Stack.Screen
          sharedElements={sharedElements}
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

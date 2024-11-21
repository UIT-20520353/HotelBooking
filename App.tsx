import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import WelComeScreen from './app/screens/welcome';

const RootStack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={rootStyle.container}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Welcome"
            component={WelComeScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const rootStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default App;

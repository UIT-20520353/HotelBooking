import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './app/screens/home';
import WelComeScreen from './app/screens/welcome';
import { TRootStackParamList } from './app/types/navigation';

const RootStack = createStackNavigator<TRootStackParamList>();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={rootStyle.container}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Welcome">
          <RootStack.Screen
            name="Welcome"
            component={WelComeScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
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

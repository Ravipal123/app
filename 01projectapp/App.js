import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ScreenA'>
        <Stack.Screen name='ScreenA' component={ScreenA} options={{ title: 'Home' }}/>
        <Stack.Screen name='ScreenB' component={ScreenB} options={{ title: 'Details' }}/>
      </Stack.Navigator >
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

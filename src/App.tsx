import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login/index';
import { enableFreeze } from 'react-native-screens';
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

enableFreeze(true);

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <StatusBar barStyle="light-content" /> // ajustar por padrao do dispositivo */} 
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }} 
        >
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
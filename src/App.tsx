import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { enableFreeze } from 'react-native-screens';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import Login from './screens/Login/index';
import Dashboard from './screens/Dashboard';
import Delivery from './screens/Delivery';
import Report from './screens/Report';
import Icons from './Components/Icons';
import Profile from './screens/Profile';
import { RFValue } from 'react-native-responsive-fontsize';

enableFreeze(true);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#FA641E',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Poppins-Medium'
        },
        tabBarStyle: {
          height: insets.bottom + 60
        }
       }}
    >
      <Tab.Screen
        name='Report'
        component={Report}
        options={{ title: "Relatórios", 
        tabBarIcon: ({size, color}) => (
          <Icons name='report' color={color} />
        )
      }}
      />
      <Tab.Screen
        name='Home'
        component={Dashboard}
        options={{ title: "Visão geral", 
        tabBarIcon: ({size, color}) => (
          <Icons name='home' color={color} />
        )
      }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{ title: "Perfil", 
        tabBarIcon: ({size, color}) => (
          <Icons name='profile' color={color} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <StatusBar barStyle="light-content" /> // ajustar por padrao do dispositivo */} 
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
            gestureEnabled: true
          }} 
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Dashboard' component={TabScreen} />
          <Stack.Screen name='Delivery' component={Delivery} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
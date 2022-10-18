import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { HomeScreen } from './src/screens/HomeScreen';
import { OwnTasks } from './src/screens/OwnTasks';
import { MoodleTasks } from './src/screens/MoodleTasks';
import { Historial } from './src/screens/Historial';
import { StyleSheet, View } from 'react-native';

const getTabBarIcon = (name) =>
  ({ focused, color, size }) => {
    const nameRe = focused ? name : name + "-outline";
    return <MaterialCommunityIcons name={nameRe} color={focused ? "white" : "gray"} size={25} />
  }

const theme = {
  colors: {
    backgroundColor: "tomato",
  },
};

const Tab = createBottomTabNavigator();

const App = () => {

  const navigationRef = useNavigationContainerRef();

  return (
    <>
      <StatusBar translucent />
      <NavigationContainer ref={navigationRef} theme={theme}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              minHeight: 100,
              borderLeftWidth: 1.5,
              borderRightWidth: 1.5,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderColor: "#383838",
              backgroundColor: "#242424"
            },
            headerStyle: {
              backgroundColor: "#242424",
              shadowOffset: 0,
              shadowOpacity: 0,
              shadowRadius: 0,
              shadowColor: "#242424",
            },
            headerTintColor: "white"
          }} initialRouteName="Home">
          <Tab.Screen
            options={{
              tabBarIcon: getTabBarIcon("home-variant"),
              // tabBarBadge: 2
            }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: getTabBarIcon("clipboard-list"),
              // tabBarBadge: 2
            }}
            name="Tasks"
            component={OwnTasks}
          />
          <Tab.Screen
            options={{
              tabBarIcon: getTabBarIcon("cloud")
            }}
            name="MoodleTasks"
            component={MoodleTasks}
          />
          <Tab.Screen
            options={{
              tabBarIcon: getTabBarIcon("clock-time-eight"),
              // tabBarIconStyle: { height: 20 }
            }}
            name="Historial"
            component={Historial} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

// screenOptions = {{
//   headerLeft: (props) => (
//     <HeaderBackButton {...props} onPress={navigationRef.goBack} />
//   ),
//         }}

export default App;

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: "#242424"
  }
});
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Ionicons from '@expo/vector-icons/Ionicons';
import { HomeScreen } from '../screens/HomeScreen';
import { OwnTasks } from '../screens/OwnTasks';
import { MoodleTasks } from '../screens/MoodleTasks';
import { Historial } from '../screens/Historial';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from '../screens/Map';

const getTabBarIcon = (name) =>
    ({ focused, color, size }) => {
        const nameRe = focused ? name : name + "-outline";
        return <MaterialCommunityIcons name={nameRe} color={focused ? "white" : "#454545"} size={25} />
    }

const theme = {
    colors: {
        backgroundColor: "tomato",
    },
};

const Tab = createBottomTabNavigator();

const Navigation = ({ onLayoutRootView }) => {
    const navigationRef = useNavigationContainerRef();




    return (
        <NavigationContainer ref={navigationRef} onReady={onLayoutRootView} theme={theme}>
            <Tab.Navigator
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    headerTitleStyle: {
                        fontSize: 20
                    },
                    headerLeftContainerStyle: {
                        paddingRight: 10,
                    },
                    headerRightContainerStyle: {
                        paddingRight: 20,
                    },
                    headerRight: () => <Ionicons size={35} color="white" name="person-circle-sharp" />,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: "absolute",
                        bottom: 0,
                        borderTopLeftRadius: 50,
                        borderLeftWidth: 1.5,
                        borderTopRightRadius: 50,
                        borderRightWidth: 1.5,
                        minHeight: 60,
                        borderColor: "#383838",
                        backgroundColor: "#242424",

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
                    component={Map}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: getTabBarIcon("clipboard-list"),
                        // tabBarBadge: 2

                    }}
                    name="Tasks"
                    component={HomeScreen}//Replace for task component
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
        </NavigationContainer >
    )
}

export default Navigation
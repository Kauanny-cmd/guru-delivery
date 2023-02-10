import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../global/style'

import Login from "../screens/Login";
import Register from '../screens/Register';
import ForgetPassword from '../screens/ForgetPassword';
import EmailSend from '../screens/EmailSend';
import Welcome from '../screens/Welcome';
import { DrawerNavigator } from './drawerNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (

        <Stack.Navigator initialRouteName="Welcome"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.whiteColor,
                },
                headerTintColor: Colors.primaryColor
            }}
        >
            <Stack.Screen name="Login" component={Login}
                options={{
                    headerTitle: '',
                }}
            />
            <Stack.Screen name='Register' component={Register}
                options={{
                    headerTitle: '',
                }}
            />
            <Stack.Screen name='ForgetPassword' component={ForgetPassword}
                options={{
                    headerTitle: '',
                }}
            />
            <Stack.Screen name='EmailSend' component={EmailSend}
                options={{
                    headerTitle: '',
                }}
            />
            <Stack.Screen name='Welcome' component={Welcome}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='Home' component={DrawerNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
export default AuthNavigator;
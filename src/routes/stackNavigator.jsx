import { createStackNavigator } from '@react-navigation/stack';

import Login from "../screens/Login";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (

        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default StackNavigator;
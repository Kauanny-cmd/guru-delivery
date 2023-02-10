import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../global/style'

import Home from '../screens/Home';
import Product from '../screens/Product';

const Stack = createStackNavigator();

export const StackHomeScreen = () => {
    return (

        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.whiteColor,
                },
                headerTintColor: Colors.primaryColor
            }}
        >
            <Stack.Screen name='Home' component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='Product' component={Product}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import { StackHomeScreen } from './stackNavigator';

import Colors from '../global/style'

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: Colors.whiteColor,
                    width: 240,
                },
                drawerPosition:'right',
            }}
        >
            <Drawer.Screen name="Cardápio" component={StackHomeScreen} 
            options={{
                headerStyle:{
                    backgroundColor:Colors.backgroundColorHome,
                },
                headerTitle:'',
                headerShown:false,
            }}
            />
        </Drawer.Navigator>
    );
}
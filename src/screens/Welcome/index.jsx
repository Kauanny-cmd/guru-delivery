import { View, Image, TouchableOpacity, Text } from 'react-native';

import Colors from '../../global/style'

import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';

import LogoWhite from '../../../assets/logoWhite.png';
import BurgerLogin from '../../../assets/bLogin.png';
import Sombra from '../../../assets/sombra.png';

const Welcome = ({ navigation }) => {
    return (
        <>
            <View style={{ justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', backgroundColor: Colors.primaryColor, height: 442 }}>
                    <Image source={LogoWhite} style={{ marginTop: 30, marginBottom: 20 }} />
                    <Image source={BurgerLogin} />
                    <Image source={Sombra} />
                </View>
                <View style={{ paddingHorizontal: 18 }}>
                    <Text style={{ marginTop:40 ,fontSize: 24, textAlign: 'center', marginBottom: 20, padding: 18, fontWeight: 'bold' }}>
                        O Hamburguer mais delicioso da sua Cidade!
                    </Text>
                    <Button title="Fazer Login"
                        onPress={() => navigation.navigate('Login')}
                        colorButton={Colors.primaryColor}
                        colorText={Colors.whiteColor}
                        colorBorder={Colors.primaryColor}
                    />
                    <Button title="Ver cardápio"
                        onPress={() => navigation.navigate('Register')}
                        colorButton={Colors.whiteColor}
                        colorText={Colors.primaryColor}
                        colorBorder={Colors.primaryColor}
                    />
                </View>

            </View>
        </>
    );
}
export default Welcome;
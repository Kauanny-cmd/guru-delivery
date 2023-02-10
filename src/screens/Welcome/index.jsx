import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../global/style'

import Button from '../../components/Button';

import LogoWhite from '../../../assets/logoWhite.png';
import BurgerLogin from '../../../assets/bLogin.png';
import Sombra from '../../../assets/sombra.png';

const Welcome = ({ navigation }) => {
    return (
        <>
            <View style={{ justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', backgroundColor: Colors.primaryColor, height: 442 }}>
                    <Image source={LogoWhite} style={{ marginTop: 20, marginBottom: 20 }} />
                    <Image source={BurgerLogin} />
                    <Image source={Sombra} />
                </View>
                <View style={{ paddingHorizontal: 18 }}>
                    <Text style={{ marginTop: 30, fontSize: 24, textAlign: 'center', padding: 18, fontWeight: 'bold' }}>
                        O Hamburguer mais delicioso da sua Cidade!
                    </Text>
                    <View style={{ alignItems: 'center', marginBottom: 16, justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>Logou</Text>
                        <Icon name="arrow-right" color={Colors.primaryColor} size={16} />
                        <Text style={{ fontSize: 18 }}>Pediu</Text>
                        <Icon name="arrow-right" color={Colors.primaryColor} size={16} />
                        <Text style={{ fontSize: 18 }}>Chegou</Text>
                    </View>
                    <Button title="Fazer Login"
                        onPress={() => navigation.navigate('Login')}
                        colorButton={Colors.primaryColor}
                        colorText={Colors.whiteColor}
                        colorBorder={Colors.primaryColor}
                    />
                    <Button title="Ver cardápio"
                        onPress={() => navigation.navigate('Home')}
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
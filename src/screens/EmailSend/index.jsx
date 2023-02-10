import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";

import Colors from '../../global/style'

import Container from '../../components/Container';
import Button from '../../components/Button';

import Email from '../../../assets/email.png';

const EmailSend = ({ navigation }) => {
    return (
        <Container backgroundColor={'#F8F9FA'}>
            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 18 }}>
                <View style={{ alignItems: 'center', marginBottom: 12 }}>
                    <Image source={Email} />
                    <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Verifique seu e-mail</Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', padding: 12, }}>
                        Enviamos as instruções para recuperação de senha para o seu e-mail.
                    </Text>
                </View>
                <TouchableOpacity>
                    <Button title="Fazer Login"
                        onPress={() => navigation.navigate('Login')}
                        colorButton={Colors.primaryColor}
                        colorText={Colors.whiteColor}
                        colorBorder={Colors.primaryColor}
                    />
                </TouchableOpacity>
            </View>
        </Container>
    );
}

export default EmailSend;
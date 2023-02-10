import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";

import Colors from '../../global/style'

import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../../assets/logo.png';
import Linha from '../../../assets/linha.png';

const initialValues = {
    email: "",
};

const SinginSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Obrigatório"),
});

const ForgetPassword = ({ navigation }) => {
    return (

        <Container backgroundColor={'#F8F9FA'}>

            <Formik
                initialValues={initialValues}
                validationSchema={SinginSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, }) => (

                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 18 }}>
                        <View style={{ alignItems: 'center', marginBottom: 42 }}>
                            <Image source={Logo} />
                            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Esqueceu sua senha?</Text>
                            <Text style={{ fontSize: 18, textAlign: 'center', padding: 12, margin: 10 }}>
                                Preencha o campo com seu e-mail e receba as instruções necessárias para redefinir  a sua senha.
                            </Text>
                            <Image source={Linha} />
                        </View>
                        <Input placeholder="Digite seu e-mail" onChange={handleChange("email")} onBlur={handleBlur("email")} value={values.email}
                            error={errors.email && touched.email ? errors.email : undefined} />
                        <TouchableOpacity style={{ marginTop: 12 }} onPress={() => handleSubmit()} >
                            <Button title="Enviar"
                                onPress={() => navigation.navigate('EmailSend')}
                                colorButton={Colors.primaryColor}
                                colorText={Colors.whiteColor}
                                colorBorder={Colors.primaryColor}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </Container>
    );
}

export default ForgetPassword;
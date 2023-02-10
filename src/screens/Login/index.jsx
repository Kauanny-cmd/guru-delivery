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
    password: "",
};

const SinginSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Obrigatório"),
    password: Yup.string().min(8, "Senha invalida").required("Obrigatório"),
});

const Login = ({ navigation }) => {
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
                            <Text style={{ fontSize: 18, textAlign: 'center', padding: 12, margin: 10 }}>Use suas credenciais para realizar o login.</Text>
                            <Image source={Linha} />
                        </View>
                        <Input placeholder="Digite seu e-mail" onChange={handleChange("email")} onBlur={handleBlur("email")} value={values.email}
                            error={errors.email && touched.email ? errors.email : undefined} />
                        <Input placeholder="Digite sua senha" onChange={handleChange("password")} onBlur={handleBlur("password")} value={values.password}
                            error={errors.password && touched.password ? errors.password : undefined} password />
                        <TouchableOpacity style={{ marginTop: 12 }} onPress={() => handleSubmit()} >
                            <Button title="Entrar"
                                onPress={() => navigation.navigate('Home')}
                                colorButton={Colors.primaryColor}
                                colorText={Colors.whiteColor}
                                colorBorder={Colors.primaryColor}
                            />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                            <Text style={{ fontSize: 16, color: Colors.blackColor }}>Esqueceu sua senha?</Text>
                            <Button style={{ margin: 3 }} title="Clique aqui" link
                                onPress={() => navigation.navigate('ForgetPassword')}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={Linha} style={{ marginBottom: 40 }} />
                        </View>
                        <Button title="Quero me cadastrar"
                            onPress={() => navigation.navigate('Register')}
                            colorButton={Colors.whiteColor}
                            colorText={Colors.primaryColor}
                            colorBorder={Colors.primaryColor}
                        />
                    </View>
                )}
            </Formik>
        </Container>
    );
}

export default Login;
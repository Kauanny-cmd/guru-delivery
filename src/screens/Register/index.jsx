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
    name: '',
    email: "",
    password: "",
};

const SinginSchema = Yup.object().shape({
    name: Yup.string().required('Obrigatório'),
    email: Yup.string().email("Email invalido").required("Obrigatório"),
    password: Yup.string().min(8, "Senha invalida").required("Obrigatório"),
});

const Register = ({ navigation }) => {
    return (

        <Container>

            <Formik
                initialValues={initialValues}
                validationSchema={SinginSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, }) => (

                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 18 }}>
                        <View style={{ alignItems: 'center', marginBottom: 42 }}>
                            <Image source={Logo} />
                            <Text style={{ fontSize: 18, textAlign: 'center', padding: 12, margin: 10 }}>
                                Preencha os campos
                                para criar o seu cadastro.
                            </Text>
                            <Image source={Linha} />
                        </View>
                        <Input placeholder="Digite seu nome" onChange={handleChange("name")} onBlur={handleBlur("nome")} value={values.name}
                            error={errors.name && touched.name ? errors.name : undefined} />
                        <Input placeholder="Digite seu e-mail" onChange={handleChange("email")} onBlur={handleBlur("email")} value={values.email}
                            error={errors.email && touched.email ? errors.email : undefined} />
                        <Input placeholder="Digite sua senha" onChange={handleChange("password")} onBlur={handleBlur("password")} value={values.password}
                            error={errors.password && touched.password ? errors.password : undefined} password />
                        <TouchableOpacity style={{ marginTop: 12 }} onPress={() => handleSubmit()} >
                            <Button title="Cadastrar"
                                colorButton={Colors.primaryColor}
                                colorText={Colors.whiteColor}
                                colorBorder={Colors.primaryColor}
                            />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                            <Text style={{ fontSize: 16, color: Colors.blackColor }}>Já tem cadastro?</Text>
                            <Button style={{ margin: 3 }} title="Fazer Login" link
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </Container>
    );
}

export default Register;
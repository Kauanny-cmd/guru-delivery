import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import Container from '../../components/Container';
import Input from '../../components/Input';
import Old from '../../../assets/OldBurger.png'
import Cards from '../../components/Cards';

import style from './style';
import Colors from '../../global/style'

const Home = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <Container style={{ backgroundColor: Colors.backgroundColorHome }}>
                <View style={{ flex: 1, paddingHorizontal: 18 }}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}> Seja Bem Vindo 👋 </Text>
                        <Text style={{ color: Colors.grayText, marginBottom: 14, fontSize: 16 }}> O que deseja pra hoje?</Text>
                        <Input
                            placeholder={'Pesquisar'}
                        />

                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                        <Shadow stretch="false">
                            <View style={style.container}>
                                <View style={style.quadrado} >
                                    <Text style={style.promoText}>Promoção</Text>
                                    <Text style={{ fontSize: 22, fontWeight: "700" }}>Dose Dupla.</Text>
                                    <Text style={{ fontSize: 12, color: Colors.grayColor }}>2 Old Burger por apenas:</Text>
                                    <Text style={{ fontSize: 30, color: Colors.primaryColor, fontWeight: "400" }}>R$ 35,50</Text>
                                </View>
                                <View style={style.lateral} />
                                <Image source={Old} style={style.Img} />
                                <Image source={Old} style={style.Img2} />
                            </View>
                        </Shadow>
                    </TouchableOpacity>

                    <View style={style.produtos}>

                        <TouchableOpacity>
                                <Cards
                                    colorText={Colors.primaryColor}
                                    type='Tradicional'
                                    name="Texas Burger"
                                    price='R$ 25,50'
                                    img={require('../../../assets/TexasBurger.png')}
                                />
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                            <Cards
                                colorText={Colors.primaryColor}
                                type='Tradicional'
                                name="Golden Burger"
                                price='R$ 25,50'
                                img={require('../../../assets/GoldenBurger.png')}

                                onSubmit={(
                                    type,
                                    name
                                ) => navigation.Product}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Cards
                                colorText={Colors.primaryColor}
                                type='Tradicional'
                                name="Monster Burger"
                                price='R$ 25,50'
                                img={require('../../../assets/MonsterBurger.png')}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Cards
                                colorText={Colors.primaryColor}
                                type='Tradicional'
                                name="Old Burger"
                                price='R$ 25,50'
                                img={require('../../../assets/OldBurger.png')}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Cards
                                colorText={Colors.primaryColor}
                                type='Tradicional'
                                name="Golden Burger"
                                price='R$ 25,50'
                                img={require('../../../assets/GoldenBurger.png')}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Cards
                                colorText={Colors.primaryColor}
                                type='Tradicional'
                                name="Texas Burger"
                                price='R$ 25,50'
                                img={require('../../../assets/TexasBurger.png')}

                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        </ScrollView>

    );
}
export default Home;
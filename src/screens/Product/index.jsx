import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { color, Icon } from "@rneui/base";

import Button from '../../components/Button';

import style from "./style";

import GoldenBurger from '../../../assets/GoldenBurger1.png'
import Colors from "../../global/style";

const Product = ({ navigation }) => {

    const [count, setCount] = useState(1);
    const mais = () => setCount(prevCount => prevCount + 1);
    const menos = () => setCount(prevCount => prevCount - 1);

    return (
        <>
            <View style={style.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.primaryColor, alignItems:'center' }}>
                    <Icon
                        name="west"
                        type="material"
                        size={16}
                        color='#fff'
                        onPress={() => navigation.goBack()}
                        style={{
                            margin: 20,
                            borderRadius: 5,
                            backgroundColor: Colors.secondaryColor,
                            position: "relative",
                            display: "flex",
                            alignItems: "flex-start",
                            padding: 16,
                        }}
                    />
                    <Text style={style.title}>Produto</Text>
                    <Icon
                        name="favorite"
                        type="material"
                        size={16}
                        color='#fff'
                        onPress={() => navigation.goBack()}
                        style={{
                            margin: 20,
                            borderRadius: 5,
                            backgroundColor: Colors.secondaryColor,
                            position: "relative",
                            display: "flex",
                            alignItems: "flex-start",
                            padding: 16
                        }}
                    />
                </View>
                <View style={style.top}>

                    <Image source={GoldenBurger} style={style.img} />
                </View>

                <View style={style.bottom}>
                    <Text>
                        <Text style={{ fontSize: 16, fontWeight: "500" }}> Tradicional</Text> {"\n"} {"\n"}
                        <Text style={{ fontSize: 40, fontWeight: "600" }}>Golden Burger</Text>{"\n"} {"\n"}
                        <Text style={{ fontSize: 16, color: Colors.grayText, fontWeight: '400' }}>
                            2 Blends de carne de 150g, Queijo Cheddar,
                            Bacon Caramelizado, Salada, Molho da casa,
                            Pão brioche artesanal,
                        </Text>
                    </Text>

                    <Image source={require('../../../assets/divisor.png')} />

                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "400" }}>Quantidade</Text>

                        <View style={style.quant}>

                            <TouchableOpacity onPress={menos} style={style.button1}>
                                <Text style={style.textBtt}>-</Text>
                            </TouchableOpacity>

                            <Text style={{ fontSize: 22, color: Colors.primaryColor }}>{count}</Text>

                            <TouchableOpacity onPress={mais} style={style.button2}>
                                <Text style={[style.textBtt, style.colorBtt2]}>+</Text>
                            </TouchableOpacity>

                            <Text style={{
                                fontSize: 40,
                                fontWeight: "500",
                                color: Colors.primaryColor
                            }}>
                                R$ 25,50</Text>
                        </View>
                    </View>

                    <Button title="Adicionar à sacola"
                        colorBorder={Colors.primaryColor}
                        colorButton={Colors.primaryColor}
                        colorText={Colors.whiteColor}
                        onPress={() => navigation.navigate('Bag')} />
                </View>
            </View>
        </>
    );
}
export default Product
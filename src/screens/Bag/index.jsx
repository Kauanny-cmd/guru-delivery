import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useState } from "react";
import { Icon } from "@rneui/base";
import Colors from '../../global/style'

import Button from '../../components/Button';
import style from "./style";

const Bag = ({ navigation }) => {

    const [number, onChangeNumber] = useState(null)
    const [count, setCount] = useState(1);
    const mais = () => setCount(prevCount => prevCount + 1);
    const menos = () => setCount(prevCount => prevCount - 1);

    return (
        <>
            <ScrollView style={{ backgroundColor: Colors.backgroundColor }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.backgroundColor, alignItems: 'center' }}>
                    <Icon
                        name="west"
                        type="material"
                        size={16}
                        color={Colors.primaryColor}
                        onPress={() => navigation.goBack()}
                        style={{
                            margin: 20,
                            borderRadius: 5,
                            position: "relative",
                            display: "flex",
                            alignItems: "flex-start",
                            padding: 16,
                        }}
                    />
                    <Text style={style.title}>Produto</Text>
                    <Icon
                        name="west"
                        type="material"
                        size={16}
                        color={Colors.whiteColor}
                        style={{
                            margin: 20,
                            borderRadius: 5,
                            position: "relative",
                            display: "flex",
                            alignItems: "flex-start",
                            padding: 16,
                        }}
                    />
                </View>
                <Image source={require('../../../assets/divLinha.png')} />
                <Text style={{ fontSize: 16, fontWeight: '400', padding: 12 }}>4 itens</Text>
                <Image source={require('../../../assets/divLinha.png')} />
                <View style={style.produto}>
                    <Image source={require('../../../assets/GoldenBurger.png')} style={style.img} />
                    <View style={style.describle}>
                        <Text>
                            <Text style={{ fontSize: 12, fontWeight: "400", color: Colors.grayText }}> Tradicional</Text> {"\n"} {"\n"}
                            <Text style={{ fontSize: 16, fontWeight: "500" }}> Golden Burger</Text>{"\n"} {"\n"}
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "600",
                                color: Colors.primaryColor
                            }}>
                                R$ 25,50</Text>
                        </Text>
                    </View>
                    <View style={style.quant}>
                        <TouchableOpacity onPress={menos} style={style.button1}>
                            <Text style={style.textBtt}>-</Text>
                        </TouchableOpacity>

                        <Text style={style.count}>{count}</Text>

                        <TouchableOpacity onPress={mais} style={style.button2}>
                            <Text style={[style.textBtt, style.colorBtt2]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image source={require('../../../assets/divLinha.png')} />
                <View style={style.produto}>
                    <Image source={require('../../../assets/MonsterBurger.png')} style={style.img} />
                    <View style={style.describle}>
                        <Text>
                            <Text style={{ fontSize: 12, fontWeight: "400", color: Colors.grayText }}> Tradicional</Text> {"\n"} {"\n"}
                            <Text style={{ fontSize: 16, fontWeight: "500" }}> Monster Burger</Text>{"\n"} {"\n"}
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "600",
                                color: Colors.primaryColor
                            }}>
                                R$ 25,50</Text>
                        </Text>
                    </View>

                    <View style={style.quant}>
                        <TouchableOpacity onPress={menos} style={style.button1}>
                            <Text style={style.textBtt}>-</Text>
                        </TouchableOpacity>

                        <Text style={style.count}>{count}</Text>

                        <TouchableOpacity onPress={mais} style={style.button2}>
                            <Text style={[style.textBtt, style.colorBtt2]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image source={require('../../../assets/divLinha.png')} /><View style={style.produto}>
                    <Image source={require('../../../assets/TexasBurger.png')} style={style.img} />
                    <View style={style.describle}>
                        <Text>
                            <Text style={{ fontSize: 12, fontWeight: "400", color: Colors.grayText }}> Tradicional</Text> {"\n"} {"\n"}
                            <Text style={{ fontSize: 16, fontWeight: "500" }}> Texas Burger</Text>{"\n"} {"\n"}
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "600",
                                color: Colors.primaryColor
                            }}>
                                R$ 25,50</Text>
                        </Text>
                    </View>
                    <View style={style.quant}>
                        <TouchableOpacity onPress={menos} style={style.button1}>
                            <Text style={style.textBtt}>-</Text>
                        </TouchableOpacity>

                        <Text style={style.count}>{count}</Text>

                        <TouchableOpacity onPress={mais} style={style.button2}>
                            <Text style={[style.textBtt, style.colorBtt2]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image source={require('../../../assets/divLinha.png')} /><View style={style.produto}>
                    <Image source={require('../../../assets/OldBurger.png')} style={style.img} />
                    <View style={style.describle}>
                        <Text>
                            <Text style={{ fontSize: 12, fontWeight: "400", color: Colors.grayText }}> Tradicional</Text> {"\n"} {"\n"}
                            <Text style={{ fontSize: 16, fontWeight: "500" }}> Old Burger</Text>{"\n"} {"\n"}
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "600",
                                color: Colors.primaryColor
                            }}>
                                R$ 25,50</Text>
                        </Text>
                    </View>
                    <View style={style.quant}>
                        <TouchableOpacity onPress={menos} style={style.button1}>
                            <Text style={style.textBtt}>-</Text>
                        </TouchableOpacity>

                        <Text style={style.count}>{count}</Text>

                        <TouchableOpacity onPress={mais} style={style.button2}>
                            <Text style={[style.textBtt, style.colorBtt2]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image source={require('../../../assets/divLinha.png')} />
                <View style={style.container}>
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>Calcular frete e prazo</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={style.input}
                            onChangeNumber={onChangeNumber}
                            value={number}
                            keyboardType="numeric"
                            placeholder="12345-123"
                        />
                        <Button
                            title={'OK'}
                            colorBorder={Colors.primaryColor}
                            colorText={Colors.primaryColor}
                            colorButton={Colors.whiteColor}
                        />
                    </View>
                    <View style={style.local}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>
                                <Text style={{ fontSize: 10, fontWeight: "400", color: Colors.grayColor }}>Rua Joaquim Luís, 40, Centro</Text> {"\n"}
                                <Text style={{ fontSize: 16, fontWeight: "400" }}>Receba em até 20 minutos</Text>
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "500",
                                color: Colors.primaryColor
                            }}>
                                R$12,50</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', padding: 16, backgroundColor: Colors.whiteColor, borderRadius: 6, marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 10, }}>
                            <Text style={{ fontSize: 16, fontWeight: "400" }}>Subtotal</Text>
                            <Text style={{ fontSize: 16, fontWeight: "400", }}> R$102,00 </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "400" }}>Frete</Text>
                            <Text style={{ fontSize: 26, fontWeight: "400", }}> -- </Text>
                        </View>
                        <Image source={require('../../../assets/divPont.png')} />
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 20, marginTop: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: "400" }}>Total</Text>
                            <Text style={{ fontSize: 22, fontWeight: "600", color: Colors.primaryColor }}>R$102,00</Text>
                        </View>
                        <View style={{ marginBottom: -12 }}>
                            <Button
                                colorBorder={Colors.primaryColor}
                                colorText={Colors.whiteColor}
                                colorButton={Colors.primaryColor}
                                title="Continuar"
                                onPress={() => navigation.navigate('Bag')}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
export default Bag
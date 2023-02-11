import { Text, View, Image, TouchableOpacity } from "react-native"
import { Icon } from "@rneui/base";

import Colors from '../../global/style'

import Container from "../../components/Container";
import Button from "../../components/Button";

const Menu = ({ navigation }) => {
    return (
        <>
            <Container style={{ backgroundColor: Colors.backgroundColor }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', width: 224 }}>
                            <Button
                                colorBorder={Colors.primaryColor}
                                colorButton={Colors.primaryColor}
                                colorText={Colors.whiteColor}
                                title='Fazer Login'
                            />
                        </View>
                        <Icon
                            name="close"
                            type="material"
                            size={26}
                            color={Colors.primaryColor}
                            onPress={() => navigation.goBack()}
                            style={{
                                borderRadius: 5,
                                position: "relative",
                                display: "flex",
                                alignItems: "flex-start",
                                padding: 16,
                                flex: 1,
                                top: -20,
                            }}
                        />
                    </View>
                    <Image source={require('../../../assets/divMenu.png')} style={{ marginTop: 20, marginBottom: 20, paddingLeft: 20, paddingRight: 20 }} />
                </View>
                <View style={{ padding: 16 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Icon
                                    name="restaurant"
                                    type="material"
                                    size={26}
                                    color={Colors.grayText}
                                    onPress={() => navigation.goBack()}
                                    style={{
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "flex-start",
                                        padding: 14,
                                    }}
                                />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: Colors.grayText, fontSize: 16, fontWeight: '400' }}>Cardápio</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Bag')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Icon
                                    name="local-mall"
                                    type="material"
                                    size={26}
                                    color={Colors.grayText}
                                    onPress={() => navigation.goBack()}
                                    style={{
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "flex-start",
                                        padding: 14,
                                    }}
                                />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: Colors.grayText, fontSize: 16, fontWeight: '400' }}>Sacola</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Icon
                                    name="favorite-border"
                                    type="material"
                                    size={26}
                                    color={Colors.grayText}
                                    onPress={() => navigation.goBack()}
                                    style={{
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "flex-start",
                                        padding: 14,
                                    }}
                                />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: Colors.grayText, fontSize: 16, fontWeight: '400' }}>Favoritos</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Icon
                                    name="list-alt"
                                    type="material"
                                    size={26}
                                    color={Colors.grayText}
                                    onPress={() => navigation.goBack()}
                                    style={{
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "flex-start",
                                        padding: 14,
                                    }}
                                />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: Colors.grayText, fontSize: 16, fontWeight: '400' }}>Meus Pedidos</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Icon
                                    name="settings"
                                    type="material"
                                    size={26}
                                    color={Colors.grayText}
                                    onPress={() => navigation.goBack()}
                                    style={{
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "flex-start",
                                        padding: 14,
                                    }}
                                />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: Colors.grayText, fontSize: 16, fontWeight: '400' }}>Configurações</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Container>
        </>
    )
}
export default Menu;